const STORAGE_KEY = "starfish-reservations-v1";
const EXTERNAL_CALENDAR_STORAGE_KEY = "starfish-external-calendar-blocks-v1";

const translations = {
  en: {
    navApartments: "Apartments",
    navReservations: "Reservations",
    location: "Ayia Napa, Cyprus",
    heroTitle: "Apartment reservations, styled for direct bookings.",
    minimumStay: "Minimum stay is 3 nights.",
    step1: "Step 1",
    guestsTitle: "How many guests?",
    maxGuests: "Maximum 6 people, not counting infants.",
    adults: "Adults",
    children: "Children",
    infants: "Infants",
    showApartments: "Show apartment options",
    step2: "Step 2 · Apartments",
    chooseApartment: "Choose your apartment",
    initialGuestSummary: "Apartment 5 is intentionally shown separately because it has 2 more bedrooms.",
    step3: "Step 3 · Availability",
    selectDates: "Select dates",
    availabilityHelp: "Red dates are already reserved. Choose an available check-in and check-out below.",
    available: "Available",
    reserved: "Reserved",
    selectedStay: "Your selected stay",
    selectedStayLabel: "Selected stay",
    dragDates: "Drag across the calendar to select dates",
    continueGuestDetails: "Continue to guest details",
    step4: "Step 4 · Guest details",
    guestDetails: "Guest details",
    guestDetailsHelp: "This form appears only after guests, apartment, and available dates are completed.",
    selectedApartment: "Selected apartment",
    guestName: "Guest name",
    email: "Email",
    phone: "Phone",
    totalPrice: "Total price (EUR)",
    notes: "Notes",
    confirmReservation: "Confirm reservation",
    faq: "FAQs",
    apartment: "Apartment",
    flat: "Flat",
    studio: "Studio",
    oneBedroom: "One bedroom",
    twoBedrooms: "Two bedrooms",
    oneQueenBed: "1 queen bed",
    doubleQueenSofa: "1 double queen bed + 1 sofa bed",
    queenTwoSinglesSofa: "1 queen bed + 2 single beds + 1 sofa bed",
    queenSofa: "1 queen bed + 1 sofa bed",
    guests: "Guests",
    minimum: "Minimum",
    nights: "nights",
    night: "night",
    selected: "Selected",
    viewDates: "View dates",
    select: "Select",
    dates: "dates",
    photoGallery: "photo gallery",
    photo: "photo",
    category13: "Apartments 1-3",
    category4: "Apartment 4",
    category5: "Apartment 5",
    category67: "Flats 6-7",
    category812: "Apartments 8-12",
    description13: "Studios with 1 double queen bed and 1 sofa bed. Fits up to 4 guests.",
    description4: "One-bedroom apartment with 1 queen bed. Fits up to 2 guests.",
    description5: "Two-bedroom apartment with 1 queen bed, 2 single beds, and 1 sofa bed. Fits up to 6 guests.",
    description67: "Studios with 1 queen bed only. Fits up to 2 guests.",
    description812: "One-bedroom apartments with 1 queen bed and 1 sofa bed. Fits up to 4 guests.",
    categoryDoesNotFit: "This category does not fit {count} guests.",
    chooseDatesForApartment: "Choose dates for this apartment.",
    selectedDatesSummary: "{start} to {end} · {count} {unit}",
    reservedDateError: "This date is reserved. Please choose available dates.",
    selectApartmentFirst: "Please select an apartment first.",
    selectDatesByDragging: "Please select your dates by dragging across the calendar.",
    minimumStayError: "Minimum stay is 3 nights. Please choose a longer stay.",
    maximumGuestsError: "{apartment} fits maximum {count} guests, not counting infants.",
    noApartmentAvailable: "No available apartment for the chosen dates.",
    apartmentAvailable: "{apartment} is available for {count} nights. Please enter the guest details.",
    capacityError: "Maximum available capacity is 6 guests in Apartment 5, not counting infants.",
    showingCategories: "Showing apartment categories for {guests}{infants}. Each category is shown in a different rectangle.",
    guestCount: "{count} guest",
    guestCountPlural: "{count} guests",
    infantCount: " plus {count} infant",
    infantCountPlural: " plus {count} infants",
    searchDatesFirst: "Please search dates first.",
    selectAvailableApartment: "Please select an available apartment.",
    reservationConfirmed: "Reservation confirmed for {apartment}.",
    selectedApartmentPlaceholder: "Select from apartment cards",
    guestNamePlaceholder: "Guest full name",
    notesPlaceholder: "Arrival time, cleaning notes, special requests...",
    backToGuests: "Back to guests",
    backToApartments: "Back to apartments",
    backToDates: "Back to dates",
    pricingUnavailable: "Live prices are temporarily unavailable.",
    reservationsOpeningSoon: "Online reservations opening soon",
  },
  el: {
    navApartments: "Διαμερίσματα",
    navReservations: "Κρατήσεις",
    location: "Αγία Νάπα, Κύπρος",
    heroTitle: "Κρατήσεις διαμερισμάτων για απευθείας κρατήσεις.",
    minimumStay: "Ελάχιστη διαμονή 3 νύχτες.",
    step1: "Βήμα 1",
    guestsTitle: "Πόσα άτομα;",
    maxGuests: "Μέγιστο 6 άτομα, χωρίς τα βρέφη.",
    adults: "Ενήλικες",
    children: "Παιδιά",
    infants: "Βρέφη",
    showApartments: "Εμφάνιση επιλογών",
    step2: "Βήμα 2 · Διαμερίσματα",
    chooseApartment: "Επιλέξτε διαμέρισμα",
    initialGuestSummary: "Το Διαμέρισμα 5 εμφανίζεται ξεχωριστά επειδή έχει 2 υπνοδωμάτια.",
    step3: "Βήμα 3 · Διαθεσιμότητα",
    selectDates: "Επιλέξτε ημερομηνίες",
    availabilityHelp: "Οι κόκκινες ημερομηνίες είναι ήδη κρατημένες. Επιλέξτε διαθέσιμες ημερομηνίες.",
    available: "Διαθέσιμο",
    reserved: "Κρατημένο",
    selectedStay: "Η επιλεγμένη διαμονή",
    selectedStayLabel: "Επιλεγμένη διαμονή",
    dragDates: "Σύρετε στο ημερολόγιο για επιλογή ημερομηνιών",
    continueGuestDetails: "Συνέχεια στα στοιχεία επισκέπτη",
    step4: "Βήμα 4 · Στοιχεία επισκέπτη",
    guestDetails: "Στοιχεία επισκέπτη",
    guestDetailsHelp: "Η φόρμα εμφανίζεται μόνο μετά την επιλογή ατόμων, διαμερίσματος και διαθέσιμων ημερομηνιών.",
    selectedApartment: "Επιλεγμένο διαμέρισμα",
    guestName: "Όνομα επισκέπτη",
    email: "Ηλεκτρονικό ταχυδρομείο",
    phone: "Τηλέφωνο",
    totalPrice: "Συνολική τιμή (Ευρώ)",
    notes: "Σημειώσεις",
    confirmReservation: "Επιβεβαίωση κράτησης",
    faq: "Συχνές ερωτήσεις",
    apartment: "Διαμέρισμα",
    flat: "Διαμέρισμα",
    studio: "Στούντιο",
    oneBedroom: "Ένα υπνοδωμάτιο",
    twoBedrooms: "Δύο υπνοδωμάτια",
    oneQueenBed: "1 διπλό κρεβάτι",
    doubleQueenSofa: "1 διπλό κρεβάτι + 1 καναπές-κρεβάτι",
    queenTwoSinglesSofa: "1 διπλό κρεβάτι + 2 μονά κρεβάτια + 1 καναπές-κρεβάτι",
    queenSofa: "1 διπλό κρεβάτι + 1 καναπές-κρεβάτι",
    guests: "Άτομα",
    minimum: "Ελάχιστο",
    nights: "νύχτες",
    night: "νύχτα",
    selected: "Επιλεγμένο",
    viewDates: "Προβολή ημερομηνιών",
    select: "Επιλογή",
    dates: "ημερομηνίες",
    photoGallery: "συλλογή φωτογραφιών",
    photo: "φωτογραφία",
    category13: "Διαμερίσματα 1-3",
    category4: "Διαμέρισμα 4",
    category5: "Διαμέρισμα 5",
    category67: "Διαμερίσματα 6-7",
    category812: "Διαμερίσματα 8-12",
    description13: "Στούντιο με 1 διπλό κρεβάτι και 1 καναπέ-κρεβάτι. Έως 4 άτομα.",
    description4: "Διαμέρισμα ενός υπνοδωματίου με 1 διπλό κρεβάτι. Έως 2 άτομα.",
    description5: "Διαμέρισμα δύο υπνοδωματίων με 1 διπλό κρεβάτι, 2 μονά κρεβάτια και 1 καναπέ-κρεβάτι. Έως 6 άτομα.",
    description67: "Στούντιο με 1 διπλό κρεβάτι. Έως 2 άτομα.",
    description812: "Διαμερίσματα ενός υπνοδωματίου με 1 διπλό κρεβάτι και 1 καναπέ-κρεβάτι. Έως 4 άτομα.",
    categoryDoesNotFit: "Αυτή η κατηγορία δεν χωράει {count} άτομα.",
    chooseDatesForApartment: "Επιλέξτε ημερομηνίες για αυτό το διαμέρισμα.",
    selectedDatesSummary: "{start} έως {end} · {count} {unit}",
    reservedDateError: "Αυτή η ημερομηνία είναι κρατημένη. Επιλέξτε διαθέσιμες ημερομηνίες.",
    selectApartmentFirst: "Επιλέξτε πρώτα ένα διαμέρισμα.",
    selectDatesByDragging: "Επιλέξτε τις ημερομηνίες σύροντας πάνω στο ημερολόγιο.",
    minimumStayError: "Η ελάχιστη διαμονή είναι 3 νύχτες. Επιλέξτε μεγαλύτερη διαμονή.",
    maximumGuestsError: "Το {apartment} φιλοξενεί έως {count} άτομα, χωρίς τα βρέφη.",
    noApartmentAvailable: "Δεν υπάρχει διαθέσιμο διαμέρισμα για τις επιλεγμένες ημερομηνίες.",
    apartmentAvailable: "Το {apartment} είναι διαθέσιμο για {count} νύχτες. Συμπληρώστε τα στοιχεία επισκέπτη.",
    capacityError: "Η μέγιστη διαθέσιμη χωρητικότητα είναι 6 άτομα στο Διαμέρισμα 5, χωρίς τα βρέφη.",
    showingCategories: "Εμφανίζονται κατηγορίες διαμερισμάτων για {guests}{infants}. Κάθε κατηγορία εμφανίζεται σε ξεχωριστό πλαίσιο.",
    guestCount: "{count} άτομο",
    guestCountPlural: "{count} άτομα",
    infantCount: " και {count} βρέφος",
    infantCountPlural: " και {count} βρέφη",
    searchDatesFirst: "Επιλέξτε πρώτα ημερομηνίες.",
    selectAvailableApartment: "Επιλέξτε ένα διαθέσιμο διαμέρισμα.",
    reservationConfirmed: "Η κράτηση επιβεβαιώθηκε για το {apartment}.",
    selectedApartmentPlaceholder: "Επιλέξτε από τα διαμερίσματα",
    guestNamePlaceholder: "Ονοματεπώνυμο επισκέπτη",
    notesPlaceholder: "Ώρα άφιξης, σημειώσεις καθαρισμού, ειδικά αιτήματα...",
    backToGuests: "Πίσω στα άτομα",
    backToApartments: "Πίσω στα διαμερίσματα",
    backToDates: "Πίσω στις ημερομηνίες",
    pricingUnavailable: "Οι ζωντανές τιμές είναι προσωρινά μη διαθέσιμες.",
    reservationsOpeningSoon: "Οι ηλεκτρονικές κρατήσεις θα ανοίξουν σύντομα",
  },
};

let currentLanguage = "en";
let syncedCalendarBlocks = [];
let nightlyRates = new Map();
let pricingReady = false;
let calendarHealthReady = false;
let reservationsEnabled = false;
const safetyRecheckMs = 5 * 60 * 1000;

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function tr(key, values = {}) {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    t(key),
  );
}

function apartmentName(apartment) {
  return `${t(apartment.nameKey)} ${apartment.id}`;
}

const apartments = [
  { id: 1, nameKey: "apartment", categoryKey: "category13", typeKey: "studio", guests: 4, bedsKey: "doubleQueenSofa", minNights: 3 },
  { id: 2, nameKey: "apartment", categoryKey: "category13", typeKey: "studio", guests: 4, bedsKey: "doubleQueenSofa", minNights: 3 },
  { id: 3, nameKey: "apartment", categoryKey: "category13", typeKey: "studio", guests: 4, bedsKey: "doubleQueenSofa", minNights: 3 },
  { id: 4, nameKey: "apartment", categoryKey: "category4", typeKey: "oneBedroom", guests: 2, bedsKey: "oneQueenBed", minNights: 3 },
  { id: 5, nameKey: "apartment", categoryKey: "category5", typeKey: "twoBedrooms", guests: 6, bedsKey: "queenTwoSinglesSofa", minNights: 3 },
  { id: 6, nameKey: "flat", categoryKey: "category67", typeKey: "studio", guests: 2, bedsKey: "oneQueenBed", minNights: 3 },
  { id: 7, nameKey: "flat", categoryKey: "category67", typeKey: "studio", guests: 2, bedsKey: "oneQueenBed", minNights: 3 },
  { id: 8, nameKey: "apartment", categoryKey: "category812", typeKey: "oneBedroom", guests: 4, bedsKey: "queenSofa", minNights: 3 },
  { id: 9, nameKey: "apartment", categoryKey: "category812", typeKey: "oneBedroom", guests: 4, bedsKey: "queenSofa", minNights: 3 },
  { id: 10, nameKey: "apartment", categoryKey: "category812", typeKey: "oneBedroom", guests: 4, bedsKey: "queenSofa", minNights: 3 },
  { id: 11, nameKey: "apartment", categoryKey: "category812", typeKey: "oneBedroom", guests: 4, bedsKey: "queenSofa", minNights: 3 },
  { id: 12, nameKey: "apartment", categoryKey: "category812", typeKey: "oneBedroom", guests: 4, bedsKey: "queenSofa", minNights: 3 },
];

const categories = [
  { key: "category13", descriptionKey: "description13" },
  { key: "category4", descriptionKey: "description4" },
  { key: "category5", descriptionKey: "description5" },
  { key: "category67", descriptionKey: "description67" },
  { key: "category812", descriptionKey: "description812" },
];

const state = {
  guests: null,
  search: null,
  selectedApartmentId: null,
  isDraggingDates: false,
  draftStartDate: null,
  draftEndDate: null,
};

const guestStepForm = document.querySelector("#guestStepForm");
const guestStepMessage = document.querySelector("#guestStepMessage");
const apartmentsSection = document.querySelector("#apartments");
const guestSummary = document.querySelector("#guestSummary");
const availabilityPanel = document.querySelector("#availabilityPanel");
const availabilityTitle = document.querySelector("#availabilityTitle");
const availabilityCalendar = document.querySelector("#availabilityCalendar");
const searchForm = document.querySelector("#searchForm");
const searchMessage = document.querySelector("#searchMessage");
const dateSummary = document.querySelector("#dateSummary");
const apartmentCategories = document.querySelector("#apartmentCategories");
const reservationSection = document.querySelector("#reservation");
const selectedApartment = document.querySelector("#selectedApartment");
const reservationForm = document.querySelector("#reservationForm");
const reservationMessage = document.querySelector("#reservationMessage");
const backToGuests = document.querySelector("#backToGuests");
const backToApartments = document.querySelector("#backToApartments");
const backToDates = document.querySelector("#backToDates");

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setLabelText(inputSelector, text) {
  const label = document.querySelector(inputSelector)?.closest("label");
  const span = label?.querySelector("span");
  if (span) span.textContent = text;
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "el" ? "el" : "en";

  setText(".nav-links a[href='#apartments']", t("navApartments"));
  setText(".nav-links a[href='#reservation']", t("navReservations"));
  setText(".hero-copy .eyebrow", t("location"));
  setText(".hero-copy h1", t("heroTitle"));
  setText(".hero-copy p:not(.eyebrow)", t("minimumStay"));
  setText("#guestStepForm .step-label", t("step1"));
  setText("#guestStepForm h2", t("guestsTitle"));
  setText("#guestStepForm .compact-note", t("maxGuests"));
  setLabelText("#adults", t("adults"));
  setLabelText("#children", t("children"));
  setLabelText("#infants", t("infants"));
  setText("#guestStepForm button", t("showApartments"));
  setText("#apartments .section-heading .eyebrow", t("step2"));
  setText("#apartments .section-heading h2", t("chooseApartment"));
  if (!state.guests) setText("#guestSummary", t("initialGuestSummary"));
  setText(".availability-copy .eyebrow", t("step3"));
  const activeApartment = apartments.find((apartment) => apartment.id === state.selectedApartmentId);
  setText("#availabilityTitle", activeApartment ? `${apartmentName(activeApartment)} ${t("dates")}` : t("selectDates"));
  setText(".availability-copy .muted", t("availabilityHelp"));
  const legendItems = document.querySelectorAll(".calendar-legend span");
  if (legendItems[0]) legendItems[0].lastChild.textContent = ` ${t("available")}`;
  if (legendItems[1]) legendItems[1].lastChild.textContent = ` ${t("reserved")}`;
  if (legendItems[2]) legendItems[2].lastChild.textContent = ` ${t("selectedStay")}`;
  setText(".selected-dates span", t("selectedStayLabel"));
  if (!document.querySelector("#checkIn").value) setText("#dateSummary", t("dragDates"));
  setText("#searchForm button", t("continueGuestDetails"));
  setText("#reservation > div .eyebrow", t("step4"));
  setText("#reservation > div h2", t("guestDetails"));
  setText("#reservation > div .muted", t("guestDetailsHelp"));
  setLabelText("#selectedApartment", t("selectedApartment"));
  setLabelText("#guestName", t("guestName"));
  setLabelText("#guestEmail", t("email"));
  setLabelText("#guestPhone", t("phone"));
  setLabelText("#totalPrice", t("totalPrice"));
  setLabelText("#bookingNotes", t("notes"));
  setText("#reservationForm button[type='submit']", t("confirmReservation"));
  if (pricingReady && !reservationsEnabled) {
    setText("#reservationForm button[type='submit']", t("reservationsOpeningSoon"));
  }
  setText(".support-note a", t("faq"));
  setText("#backToGuests", t("backToGuests"));
  setText("#backToApartments", t("backToApartments"));
  setText("#backToDates", t("backToDates"));

  const selectedApartmentInput = document.querySelector("#selectedApartment");
  const guestNameInput = document.querySelector("#guestName");
  const notesInput = document.querySelector("#bookingNotes");
  if (selectedApartmentInput) selectedApartmentInput.placeholder = t("selectedApartmentPlaceholder");
  if (guestNameInput) guestNameInput.placeholder = t("guestNamePlaceholder");
  if (notesInput) notesInput.placeholder = t("notesPlaceholder");
  if (activeApartment && selectedApartmentInput) selectedApartmentInput.value = apartmentName(activeApartment);

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
}

function getReservations() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function getExternalCalendarBlocks() {
  const legacyBlocks = JSON.parse(localStorage.getItem(EXTERNAL_CALENDAR_STORAGE_KEY) || "[]");
  return [...syncedCalendarBlocks, ...legacyBlocks];
}

function getAllBlockedReservations() {
  return [...getReservations(), ...getExternalCalendarBlocks()];
}

function rateKey(apartmentId, date) {
  return `${apartmentId}:${date}`;
}

function nightlyRateFor(apartmentId, date) {
  return nightlyRates.get(rateKey(apartmentId, date)) || null;
}

function directStayTotal(apartmentId, checkIn, checkOut) {
  let cursor = checkIn;
  let total = 0;
  while (cursor < checkOut) {
    const rate = nightlyRateFor(apartmentId, cursor);
    if (!rate?.available || !Number.isFinite(rate.directRate)) return null;
    total += rate.directRate;
    cursor = addOneDay(cursor);
  }
  return Number(total.toFixed(2));
}

function goToUnderConstruction(reason = "safety") {
  const target = new URL("./", window.location.href);
  target.searchParams.set("maintenance", reason);
  window.location.replace(target.href);
}

function revealReservationIfSafe() {
  if (pricingReady && calendarHealthReady) {
    document.body.classList.remove("pricing-check");
  }
}

async function loadNightlyRates() {
  const secureSource = "https://starfish-apartments-ayia-napa.s-havadjia.chatgpt.site/data/nightly-rates.json";
  const urls = [secureSource, "./data/nightly-rates.json"];

  for (const url of urls) {
    try {
      const response = await fetch(`${url}?v=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) continue;
      const payload = await response.json();
      const syncedAt = Date.parse(payload.syncedAt);
      const fresh = Number.isFinite(syncedAt) && Date.now() - syncedAt < 45 * 60 * 1000;
      if (payload.status !== "ready" || payload.currency !== "EUR" || !fresh || !Array.isArray(payload.rates)) continue;

      const parsed = new Map();
      for (const rate of payload.rates) {
        if (!Number.isInteger(rate.apartmentId) || !rate.date) continue;
        parsed.set(rateKey(rate.apartmentId, rate.date), {
          available: rate.available === true,
          bookingRate: Number(rate.bookingRate),
          directRate: Number(rate.directRate),
        });
      }
      if (parsed.size < 12 * 60) continue;

      nightlyRates = parsed;
      pricingReady = true;
      reservationsEnabled = payload.reservationsEnabled === true;
      const confirmationButton = reservationForm.querySelector("button[type='submit']");
      if (confirmationButton && !reservationsEnabled) {
        confirmationButton.disabled = true;
        confirmationButton.textContent = t("reservationsOpeningSoon");
      }
      revealReservationIfSafe();
      renderCalendar();
      return true;
    } catch {
      // Try the local published fail-safe before closing the reservation page.
    }
  }

  goToUnderConstruction();
  return false;
}

async function loadExternalCalendarBlocks() {
  const secureAvailabilitySource = "https://starfish-apartments-ayia-napa.s-havadjia.chatgpt.site/data/external-availability.json";
  const urls = [secureAvailabilitySource];

  for (const url of urls) {
    try {
      const response = await fetch(`${url}?v=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) continue;
      const data = await response.json();
      const blocks = data?.blocks;
      if (!Array.isArray(blocks)) continue;
      const updatedAt = Date.parse(data.updatedAt || data.syncedAt);
      const upstreamSyncedAt = Date.parse(data.upstreamSyncedAt || data.syncedAt);
      const fresh = Number.isFinite(updatedAt) && Date.now() - updatedAt < 45 * 60 * 1000;
      const upstreamFresh = Number.isFinite(upstreamSyncedAt) && Date.now() - upstreamSyncedAt < 45 * 60 * 1000;
      const health = data.calendarHealth || data.health;
      const healthy = data.status === "ready"
        && fresh
        && upstreamFresh
        && health?.status === "healthy"
        && health?.totalCalendars === 24
        && health?.connectedCalendars === 24
        && Array.isArray(health.criticalProblems)
        && health.criticalProblems.length === 0;
      if (!healthy) continue;
      syncedCalendarBlocks = blocks.filter((block) => {
        return Number.isInteger(block.apartmentId) && block.checkIn && block.checkOut;
      });
      calendarHealthReady = true;
      revealReservationIfSafe();
      renderApartments();
      renderCalendar();
      return true;
    } catch {
      // Try the next published availability source.
    }
  }

  goToUnderConstruction("calendar");
  return false;
}

function saveReservations(reservations) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
}

function dateDiffNights(checkIn, checkOut) {
  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);
  return Math.round((end - start) / 86_400_000);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function displayDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(currentLanguage === "el" ? "el-GR" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function sortDatePair(firstDate, secondDate) {
  return new Date(firstDate) <= new Date(secondDate) ? [firstDate, secondDate] : [secondDate, firstDate];
}

function addOneDay(date) {
  const next = new Date(`${date}T00:00:00`);
  next.setDate(next.getDate() + 1);
  return formatDate(next);
}

function overlaps(aStart, aEnd, bStart, bEnd) {
  return new Date(aStart) < new Date(bEnd) && new Date(aEnd) > new Date(bStart);
}

function isAvailable(apartmentId) {
  if (!state.search) return true;
  return !getAllBlockedReservations().some((reservation) => {
    return (
      reservation.apartmentId === apartmentId &&
      overlaps(state.search.checkIn, state.search.checkOut, reservation.checkIn, reservation.checkOut)
    );
  });
}

function apartmentPhotoPaths(apartmentId) {
  return Array.from({ length: 5 }, (_, index) => `./assets/apartments/${apartmentId}/${index + 1}.jpg`);
}

function renderApartmentCard(apartment) {
  const selected = state.selectedApartmentId === apartment.id;
  const status = selected ? t("selected") : t("viewDates");
  const photos = apartmentPhotoPaths(apartment.id);
  const name = apartmentName(apartment);
  const type = t(apartment.typeKey);

  return `
    <article class="apartment-card ${selected ? "selected-card" : ""}">
      <div class="apartment-gallery" aria-label="${name} ${t("photoGallery")}">
        ${photos
          .map(
            (photo, index) => `
              <img
                class="apartment-photo ${index === 0 ? "apartment-photo-cover" : ""}"
                src="${photo}"
                alt="${name} ${t("photo")} ${index + 1}"
                loading="lazy"
              />
            `,
          )
          .join("")}
        <span class="apartment-type-badge">${type}</span>
      </div>
      <h3>${name}</h3>
      <p>${t(apartment.bedsKey)}</p>
      <div class="meta">
        <span class="pill">${type}</span>
        <span class="pill">${t("guests")}: ${apartment.guests}</span>
        <span class="pill">${t("minimum")}: ${apartment.minNights} ${t("nights")}</span>
        <span class="pill">${status}</span>
      </div>
      <button class="select-button" data-apartment-id="${apartment.id}">
        ${selected ? t("selected") : `${t("select")} ${name}`}
      </button>
    </article>
  `;
}

function renderApartments() {
  const totalGuests = state.guests?.totalGuests ?? 1;
  apartmentCategories.innerHTML = categories
    .map((category) => {
      const matchingApartments = apartments.filter((apartment) => {
        return apartment.categoryKey === category.key && apartment.guests >= totalGuests;
      });
      const cards = matchingApartments.length
        ? matchingApartments.map(renderApartmentCard).join("")
        : `<p class="muted">${tr("categoryDoesNotFit", { count: totalGuests })}</p>`;

      return `
        <section class="category-box">
          <div class="category-heading">
            <div>
              <p class="step-label">${t(category.key)}</p>
              <h3>${t(category.key)}</h3>
              <p>${t(category.descriptionKey)}</p>
            </div>
          </div>
          <div class="apartment-grid">${cards}</div>
        </section>
      `;
    })
    .join("");

  document.querySelectorAll("[data-apartment-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.dataset.apartmentId);
      const apartment = apartments.find((item) => item.id === id);
      state.selectedApartmentId = id;
      state.search = null;
      state.draftStartDate = null;
      state.draftEndDate = null;
      selectedApartment.value = apartmentName(apartment);
      document.querySelector("#checkIn").value = "";
      document.querySelector("#checkOut").value = "";
      dateSummary.textContent = t("dragDates");
      apartmentCategories.hidden = true;
      reservationSection.hidden = true;
      reservationMessage.textContent = "";
      searchMessage.textContent = t("chooseDatesForApartment");
      searchMessage.classList.remove("error");
      availabilityPanel.hidden = false;
      availabilityTitle.textContent = `${apartmentName(apartment)} ${t("dates")}`;
      renderApartments();
      renderCalendar();
      availabilityPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function dateIsBooked(apartmentId, date) {
  const rate = nightlyRateFor(apartmentId, date);
  if (pricingReady && (!rate || !rate.available)) return true;
  return getAllBlockedReservations().some((reservation) => {
    return (
      reservation.apartmentId === apartmentId &&
      new Date(`${date}T00:00:00`) >= new Date(`${reservation.checkIn}T00:00:00`) &&
      new Date(`${date}T00:00:00`) < new Date(`${reservation.checkOut}T00:00:00`)
    );
  });
}

function dateInSelectedRange(date) {
  if (state.draftStartDate && state.draftEndDate) {
    const [start, end] = sortDatePair(state.draftStartDate, state.draftEndDate);
    return (
      new Date(`${date}T00:00:00`) >= new Date(`${start}T00:00:00`) &&
      new Date(`${date}T00:00:00`) < new Date(`${addOneDay(end)}T00:00:00`)
    );
  }

  if (!state.search) return false;
  return (
    new Date(`${date}T00:00:00`) >= new Date(`${state.search.checkIn}T00:00:00`) &&
    new Date(`${date}T00:00:00`) < new Date(`${state.search.checkOut}T00:00:00`)
  );
}

function updateSelectedDatesFromDraft() {
  if (!state.draftStartDate || !state.draftEndDate) return;

  const [start, end] = sortDatePair(state.draftStartDate, state.draftEndDate);
  const checkOut = addOneDay(end);
  const nights = dateDiffNights(start, checkOut);
  document.querySelector("#checkIn").value = start;
  document.querySelector("#checkOut").value = checkOut;
  dateSummary.textContent = tr("selectedDatesSummary", {
    start: displayDate(start),
    end: displayDate(checkOut),
    count: nights,
    unit: nights === 1 ? t("night") : t("nights"),
  });
}

function handleCalendarSelection(date, mode = "start") {
  if (!state.selectedApartmentId) return;

  if (dateIsBooked(state.selectedApartmentId, date)) {
    searchMessage.textContent = t("reservedDateError");
    searchMessage.classList.add("error");
    return;
  }

  searchMessage.textContent = "";
  searchMessage.classList.remove("error");

  if (mode === "start") {
    state.isDraggingDates = true;
    state.draftStartDate = date;
    state.draftEndDate = date;
  } else {
    state.draftEndDate = date;
  }

  updateSelectedDatesFromDraft();
  renderCalendar();
}

function renderCalendar() {
  if (!state.selectedApartmentId) return;

  const start = new Date();
  start.setDate(1);
  const months = [0, 1].map((offset) => new Date(start.getFullYear(), start.getMonth() + offset, 1));

  availabilityCalendar.innerHTML = months
    .map((monthDate) => {
      const year = monthDate.getFullYear();
      const month = monthDate.getMonth();
      const locale = currentLanguage === "el" ? "el-GR" : "en-GB";
      const monthName = monthDate.toLocaleDateString(locale, { month: "long", year: "numeric" });
      const weekdayNames = Array.from({ length: 7 }, (_, index) => {
        const sunday = new Date(2026, 0, 4 + index);
        return sunday.toLocaleDateString(locale, { weekday: "short" });
      });
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const blanks = Array.from({ length: firstDay }, () => `<span class="calendar-day empty"></span>`).join("");
      const days = Array.from({ length: daysInMonth }, (_, index) => {
        const date = formatDate(new Date(year, month, index + 1));
        const nightlyRate = nightlyRateFor(state.selectedApartmentId, date);
        const booked = dateIsBooked(state.selectedApartmentId, date);
        const inRange = dateInSelectedRange(date);
        return `
          <button type="button" class="calendar-day ${booked ? "booked" : ""} ${inRange ? "selected-range" : ""}" data-date="${date}">
            <span>${index + 1}</span>
            ${!booked && nightlyRate ? `<small>€${nightlyRate.directRate.toFixed(0)}</small>` : ""}
          </button>
        `;
      }).join("");

      return `
        <div class="calendar-month">
          <h3>${monthName}</h3>
          <div class="calendar-weekdays">
            ${weekdayNames.map((weekday) => `<span>${weekday}</span>`).join("")}
          </div>
          <div class="calendar-grid">${blanks}${days}</div>
        </div>
      `;
    })
    .join("");

  availabilityCalendar.querySelectorAll("[data-date]").forEach((dayButton) => {
    const date = dayButton.dataset.date;

    dayButton.addEventListener("mousedown", () => handleCalendarSelection(date, "start"));
    dayButton.addEventListener("mouseenter", () => {
      if (state.isDraggingDates) handleCalendarSelection(date, "drag");
    });
    dayButton.addEventListener("touchstart", () => handleCalendarSelection(date, "start"), { passive: true });
    dayButton.addEventListener("touchmove", (event) => {
      const touch = event.touches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      const touchedDate = element?.closest?.("[data-date]")?.dataset?.date;
      if (touchedDate) handleCalendarSelection(touchedDate, "drag");
    }, { passive: true });
  });
}

document.addEventListener("mouseup", () => {
  state.isDraggingDates = false;
});

document.addEventListener("touchend", () => {
  state.isDraggingDates = false;
});

backToGuests.addEventListener("click", () => {
  state.guests = null;
  state.search = null;
  state.selectedApartmentId = null;
  state.draftStartDate = null;
  state.draftEndDate = null;
  selectedApartment.value = "";
  guestStepForm.hidden = false;
  apartmentsSection.hidden = true;
  availabilityPanel.hidden = true;
  reservationSection.hidden = true;
  guestStepMessage.textContent = "";
  guestStepForm.scrollIntoView({ behavior: "smooth", block: "start" });
});

backToApartments.addEventListener("click", () => {
  state.search = null;
  state.selectedApartmentId = null;
  state.draftStartDate = null;
  state.draftEndDate = null;
  selectedApartment.value = "";
  document.querySelector("#checkIn").value = "";
  document.querySelector("#checkOut").value = "";
  dateSummary.textContent = t("dragDates");
  apartmentCategories.hidden = false;
  availabilityPanel.hidden = true;
  reservationSection.hidden = true;
  renderApartments();
  apartmentsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

backToDates.addEventListener("click", () => {
  reservationSection.hidden = true;
  availabilityPanel.hidden = false;
  renderCalendar();
  availabilityPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.selectedApartmentId) {
    searchMessage.textContent = t("selectApartmentFirst");
    searchMessage.classList.add("error");
    reservationSection.hidden = true;
    return;
  }

  const checkIn = document.querySelector("#checkIn").value;
  const checkOut = document.querySelector("#checkOut").value;
  const { adults, children, infants, totalGuests } = state.guests;
  const nights = dateDiffNights(checkIn, checkOut);
  const apartment = apartments.find((item) => item.id === state.selectedApartmentId);

  searchMessage.classList.remove("error");

  if (!checkIn || !checkOut) {
    searchMessage.textContent = t("selectDatesByDragging");
    searchMessage.classList.add("error");
    reservationSection.hidden = true;
    return;
  }

  if (nights < 3) {
    state.search = null;
    searchMessage.textContent = t("minimumStayError");
    searchMessage.classList.add("error");
    renderApartments();
    renderCalendar();
    reservationSection.hidden = true;
    return;
  }

  if (totalGuests > apartment.guests) {
    state.search = null;
    searchMessage.textContent = tr("maximumGuestsError", {
      apartment: apartmentName(apartment),
      count: apartment.guests,
    });
    searchMessage.classList.add("error");
    renderCalendar();
    reservationSection.hidden = true;
    return;
  }

  state.search = { checkIn, checkOut, adults, children, infants, totalGuests, nights };
  if (!isAvailable(state.selectedApartmentId)) {
    searchMessage.textContent = t("noApartmentAvailable");
    searchMessage.classList.add("error");
    reservationSection.hidden = true;
    renderCalendar();
    return;
  }

  const stayTotal = directStayTotal(state.selectedApartmentId, checkIn, checkOut);
  if (!pricingReady || stayTotal === null) {
    goToUnderConstruction();
    return;
  }

  document.querySelector("#totalPrice").value = stayTotal.toFixed(2);

  selectedApartment.value = apartmentName(apartment);
  reservationMessage.textContent = tr("apartmentAvailable", {
    apartment: apartmentName(apartment),
    count: nights,
  });
  availabilityPanel.hidden = true;
  reservationSection.hidden = false;
  renderApartments();
  renderCalendar();
  reservationSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

guestStepForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const adults = Number(document.querySelector("#adults").value);
  const children = Number(document.querySelector("#children").value);
  const infants = Number(document.querySelector("#infants").value);
  const totalGuests = adults + children;

  guestStepMessage.classList.remove("error");

  if (totalGuests > 6) {
    guestStepMessage.textContent = t("capacityError");
    guestStepMessage.classList.add("error");
    return;
  }

  state.guests = { adults, children, infants, totalGuests };
  const guestCount = tr(totalGuests === 1 ? "guestCount" : "guestCountPlural", { count: totalGuests });
  const infantCount = infants
    ? tr(infants === 1 ? "infantCount" : "infantCountPlural", { count: infants })
    : "";
  guestSummary.textContent = tr("showingCategories", { guests: guestCount, infants: infantCount });
  guestStepForm.hidden = true;
  apartmentsSection.hidden = false;
  apartmentCategories.hidden = false;
  availabilityPanel.hidden = true;
  reservationSection.hidden = true;
  renderApartments();
  apartmentsSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  reservationMessage.classList.remove("error");

  if (!reservationsEnabled) {
    reservationMessage.textContent = t("reservationsOpeningSoon");
    reservationMessage.classList.add("error");
    return;
  }

  if (!state.search) {
    reservationMessage.textContent = t("searchDatesFirst");
    reservationMessage.classList.add("error");
    return;
  }

  if (!state.selectedApartmentId) {
    reservationMessage.textContent = t("selectAvailableApartment");
    reservationMessage.classList.add("error");
    return;
  }

  if (!isAvailable(state.selectedApartmentId)) {
    reservationMessage.textContent = t("noApartmentAvailable");
    reservationMessage.classList.add("error");
    renderApartments();
    return;
  }

  const apartment = apartments.find((item) => item.id === state.selectedApartmentId);
  const reservation = {
    id: crypto.randomUUID(),
    apartmentId: apartment.id,
    apartmentName: `Apartment ${apartment.id}`,
    checkIn: state.search.checkIn,
    checkOut: state.search.checkOut,
    nights: state.search.nights,
    adults: state.search.adults,
    children: state.search.children,
    infants: state.search.infants,
    totalGuests: state.search.totalGuests,
    guestName: document.querySelector("#guestName").value,
    guestEmail: document.querySelector("#guestEmail").value,
    guestPhone: document.querySelector("#guestPhone").value,
    platform: "Direct",
    totalPrice: document.querySelector("#totalPrice").value,
    notes: document.querySelector("#bookingNotes").value,
    createdAt: new Date().toISOString(),
  };

  saveReservations([...getReservations(), reservation]);
  reservationForm.reset();
  selectedApartment.value = "";
  state.selectedApartmentId = null;
  state.search = null;
  state.guests = null;
  state.draftStartDate = null;
  state.draftEndDate = null;
  guestStepForm.hidden = false;
  apartmentsSection.hidden = true;
  apartmentCategories.hidden = false;
  availabilityPanel.hidden = true;
  reservationSection.hidden = true;
  reservationMessage.textContent = tr("reservationConfirmed", {
    apartment: apartmentName(apartment),
  });
  renderApartments();
});

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    renderApartments();
    renderCalendar();
  });
});

renderApartments();
applyLanguage("en");
Promise.all([loadExternalCalendarBlocks(), loadNightlyRates()]);
setInterval(() => {
  Promise.all([loadExternalCalendarBlocks(), loadNightlyRates()]);
}, safetyRecheckMs);
