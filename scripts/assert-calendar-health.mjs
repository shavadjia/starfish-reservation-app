import { readFile } from "node:fs/promises";

const dataUrl = new URL("../data/external-availability.json", import.meta.url);
const data = JSON.parse(await readFile(dataUrl, "utf8"));
const health = data.calendarHealth || data.health || null;
const syncStepFailed = process.env.CALENDAR_SYNC_OUTCOME
  && process.env.CALENDAR_SYNC_OUTCOME !== "success";

for (const warning of health?.warnings || []) {
  console.warn(
    `Calendar review warning: apartment ${warning.apartmentId}, ${warning.platform || "cross-platform"}, ${warning.code}, overlaps ${warning.overlapCount || 0}.`,
  );
}

const critical = syncStepFailed
  || data.status !== "ready"
  || health?.status !== "healthy"
  || health?.totalCalendars !== 24
  || health?.connectedCalendars !== 24
  || !Array.isArray(health?.criticalProblems)
  || health.criticalProblems.length > 0;

if (critical) {
  console.error("Critical calendar health problem detected. Reservations must remain in maintenance mode.");
  console.error(JSON.stringify({
    syncOutcome: process.env.CALENDAR_SYNC_OUTCOME || "unknown",
    status: data.status || "missing",
    connectedCalendars: health?.connectedCalendars || 0,
    totalCalendars: health?.totalCalendars || 24,
    criticalProblems: health?.criticalProblems || [{ code: "missing-calendar-health-report" }],
    errors: data.errors || [],
  }, null, 2));
  process.exit(1);
}

console.log("Calendar health audit passed: all 24 feeds are connected with no critical problems.");
