import { readFile, writeFile } from "node:fs/promises";

const outputPath = new URL("../data/external-availability.json", import.meta.url);

function unfoldIcs(text) {
  return text.replace(/\r?\n[ \t]/g, "");
}

function dateFromIcs(value) {
  const compact = value.trim();
  const match = compact.match(/^(\d{4})(\d{2})(\d{2})/);
  return match ? `${match[1]}-${match[2]}-${match[3]}` : null;
}

function parseEvents(text, apartmentId, source) {
  if (!text.includes("BEGIN:VCALENDAR")) {
    throw new Error("The response is not an iCalendar file");
  }

  const events = [];
  let event = null;

  for (const line of unfoldIcs(text).split(/\r?\n/)) {
    if (line === "BEGIN:VEVENT") {
      event = {};
      continue;
    }
    if (line === "END:VEVENT") {
      if (event?.start && event.status !== "CANCELLED") {
        events.push({
          apartmentId,
          checkIn: event.start,
          checkOut: event.end || addDay(event.start),
          source,
        });
      }
      event = null;
      continue;
    }
    if (!event) continue;

    const colon = line.indexOf(":");
    if (colon < 0) continue;
    const property = line.slice(0, colon).split(";")[0];
    const value = line.slice(colon + 1);
    if (property === "DTSTART") event.start = dateFromIcs(value);
    if (property === "DTEND") event.end = dateFromIcs(value);
    if (property === "STATUS") event.status = value.trim().toUpperCase();
  }

  return events;
}

function addDay(date) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return value.toISOString().slice(0, 10);
}

function dedupe(blocks) {
  const unique = new Map();
  for (const block of blocks) {
    if (!block.checkIn || !block.checkOut || block.checkOut <= block.checkIn) continue;
    const key = `${block.apartmentId}|${block.checkIn}|${block.checkOut}|${block.source}`;
    unique.set(key, block);
  }
  return [...unique.values()].sort((a, b) => {
    return a.apartmentId - b.apartmentId || a.checkIn.localeCompare(b.checkIn);
  });
}

let previous = { blocks: [] };
try {
  previous = JSON.parse(await readFile(outputPath, "utf8"));
} catch {
  // The first sync starts from an empty availability file.
}

const feeds = [];
for (let apartmentId = 1; apartmentId <= 12; apartmentId += 1) {
  for (const platform of ["BOOKING", "AIRBNB"]) {
    const environmentName = `${platform}_APT_${apartmentId}_ICAL`;
    const url = process.env[environmentName]?.trim();
    if (url) {
      feeds.push({
        apartmentId,
        platform: platform.toLowerCase(),
        source: `${platform.toLowerCase()}-${apartmentId}`,
        url,
      });
    }
  }
}

if (feeds.length === 0) {
  console.log("No inbound Booking.com or Airbnb calendar feeds are configured yet.");
  process.exit(0);
}

const blocks = [];
const errors = [];

for (const feed of feeds) {
  try {
    const response = await fetch(feed.url, {
      headers: { "user-agent": "Starfish-Apartments-Calendar-Sync/1.0" },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const events = parseEvents(await response.text(), feed.apartmentId, feed.source);
    blocks.push(...events);
    console.log(`Updated ${feed.platform} calendar for apartment ${feed.apartmentId}: ${events.length} blocked stays.`);
  } catch (error) {
    errors.push({
      apartmentId: feed.apartmentId,
      platform: feed.platform,
      message: error instanceof Error ? error.message : String(error),
    });
    blocks.push(...(previous.blocks || []).filter((block) => block.source === feed.source));
    console.error(`Could not update ${feed.platform} calendar for apartment ${feed.apartmentId}; previous data was kept.`);
  }
}

await writeFile(
  outputPath,
  `${JSON.stringify({
    updatedAt: new Date().toISOString(),
    configuredFeeds: feeds.length,
    errors,
    blocks: dedupe(blocks),
  }, null, 2)}\n`,
  "utf8",
);
