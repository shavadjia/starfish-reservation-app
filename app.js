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
    email: "Email",
    phone: "Τηλέφωνο",
    totalPrice: "Συνολική τιμή (EUR)",
    notes: "Σημειώσεις",
    confirmReservation: "Επιβεβαίωση κράτησης",
  },
};

let currentLanguage = "en";

function t(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

const apartments = [
  { id: 1, name: "Apartment 1", category: "Apartments 1-3", type: "Studio", guests: 4, beds: "1 double queen bed + 1 sofa bed", minNights: 3 },
  { id: 2, name: "Apartment 2", category: "Apartments 1-3", type: "Studio", guests: 4, beds: "1 double queen bed + 1 sofa bed", minNights: 3 },
  { id: 3, name: "Apartment 3", category: "Apartments 1-3", type: "Studio", guests: 4, beds: "1 double queen bed + 1 sofa bed", minNights: 3 },
  { id: 4, name: "Apartment 4", category: "Apartment 4", type: "One bedroom", guests: 2, beds: "1 queen bed", minNights: 3 },
  { id: 5, name: "Apartment 5", category: "Apartment 5", type: "Two bedrooms", guests: 6, beds: "1 queen bed + 2 single beds + 1 sofa bed", minNights: 3 },
  { id: 6, name: "Flat 6", category: "Flats 6-7", type: "Studio", guests: 2, beds: "1 queen bed", minNights: 3 },
  { id: 7, name: "Flat 7", category: "Flats 6-7", type: "Studio", guests: 2, beds: "1 queen bed", minNights: 3 },
  { id: 8, name: "Apartment 8", category: "Apartments 8-12", type: "One bedroom", guests: 4, beds: "1 queen bed + 1 sofa bed", minNights: 3 },
  { id: 9, name: "Apartment 9", category: "Apartments 8-12", type: "One bedroom", guests: 4, beds: "1 queen bed + 1 sofa bed", minNights: 3 },
  { id: 10, name: "Apartment 10", category: "Apartments 8-12", type: "One bedroom", guests: 4, beds: "1 queen bed + 1 sofa bed", minNights: 3 },
  { id: 11, name: "Apartment 11", category: "Apartments 8-12", type: "One bedroom", guests: 4, beds: "1 queen bed + 1 sofa bed", minNights: 3 },
  { id: 12, name: "Apartment 12", category: "Apartments 8-12", type: "One bedroom", guests: 4, beds: "1 queen bed + 1 sofa bed", minNights: 3 },
];

const categories = [
  { name: "Apartments 1-3", description: "Studios with 1 double queen bed and 1 sofa bed. Fits up to 4 guests." },
  { name: "Apartment 4", description: "One-bedroom apartment with 1 queen bed. Fits up to 2 guests." },
  { name: "Apartment 5", description: "Two-bedroom apartment with 1 queen bed, 2 single beds, and 1 sofa bed. Fits up to 6 guests." },
  { name: "Flats 6-7", description: "Studios with 1 queen bed only. Fits up to 2 guests." },
  { name: "Apartments 8-12", description: "One-bedroom apartments with 1 queen bed and 1 sofa bed. Fits up to 4 guests." },
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
  setText("#availabilityTitle", state.selectedApartmentId ? `${selectedApartment.value} ${language === "el" ? "ημερομηνίες" : "dates"}` : t("selectDates"));
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

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
}

function getReservations() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function getExternalCalendarBlocks() {
  return JSON.parse(localStorage.getItem(EXTERNAL_CALENDAR_STORAGE_KEY) || "[]");
}

function getAllBlockedReservations() {
  return [...getReservations(), ...getExternalCalendarBlocks()];
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
  return new Date(`${date}T00:00:00`).toLocaleDateString("en", {
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
  const status = selected ? "Selected" : "View dates";
  const photos = apartmentPhotoPaths(apartment.id);

  return `
    <article class="apartment-card ${selected ? "selected-card" : ""}">
      <div class="apartment-gallery" aria-label="${apartment.name} photo gallery">
        ${photos
          .map(
            (photo, index) => `
              <img
                class="apartment-photo ${index === 0 ? "apartment-photo-cover" : ""}"
                src="${photo}"
                alt="${apartment.name} photo ${index + 1}"
                loading="lazy"
              />
            `,
          )
          .join("")}
        <span class="apartment-type-badge">${apartment.type}</span>
      </div>
      <h3>${apartment.name}</h3>
      <p>${apartment.beds}</p>
      <div class="meta">
        <span class="pill">${apartment.type}</span>
        <span class="pill">Guests: ${apartment.guests}</span>
        <span class="pill">Minimum: ${apartment.minNights} nights</span>
        <span class="pill">${status}</span>
      </div>
      <button class="select-button" data-apartment-id="${apartment.id}">
        ${selected ? "Selected" : `Select ${apartment.name}`}
      </button>
    </article>
  `;
}

function renderApartments() {
  const totalGuests = state.guests?.totalGuests ?? 1;
  apartmentCategories.innerHTML = categories
    .map((category) => {
      const matchingApartments = apartments.filter((apartment) => {
        return apartment.category === category.name && apartment.guests >= totalGuests;
      });
      const cards = matchingApartments.length
        ? matchingApartments.map(renderApartmentCard).join("")
        : `<p class="muted">${currentLanguage === "el" ? `Αυτή η κατηγορία δεν χωράει ${totalGuests} άτομα.` : `This category does not fit ${totalGuests} guests.`}</p>`;

      return `
        <section class="category-box">
          <div class="category-heading">
            <div>
              <p class="step-label">${category.name}</p>
              <h3>${category.name}</h3>
              <p>${category.description}</p>
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
      selectedApartment.value = apartment.name;
      document.querySelector("#checkIn").value = "";
      document.querySelector("#checkOut").value = "";
      dateSummary.textContent = t("dragDates");
      apartmentCategories.hidden = true;
      reservationSection.hidden = true;
      reservationMessage.textContent = "";
      searchMessage.textContent = currentLanguage === "el" ? "Επιλέξτε ημερομηνίες για αυτό το διαμέρισμα." : "Choose dates for this apartment.";
      searchMessage.classList.remove("error");
      availabilityPanel.hidden = false;
      availabilityTitle.textContent = `${apartment.name} ${currentLanguage === "el" ? "ημερομηνίες" : "dates"}`;
      renderApartments();
      renderCalendar();
      availabilityPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function dateIsBooked(apartmentId, date) {
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
  dateSummary.textContent = `${displayDate(start)} to ${displayDate(checkOut)} · ${nights} night${nights === 1 ? "" : "s"}`;
}

function handleCalendarSelection(date, mode = "start") {
  if (!state.selectedApartmentId) return;

  if (dateIsBooked(state.selectedApartmentId, date)) {
    searchMessage.textContent = "This date is reserved. Please choose available dates.";
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
      const monthName = monthDate.toLocaleDateString("en", { month: "long", year: "numeric" });
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const blanks = Array.from({ length: firstDay }, () => `<span class="calendar-day empty"></span>`).join("");
      const days = Array.from({ length: daysInMonth }, (_, index) => {
        const date = formatDate(new Date(year, month, index + 1));
        const booked = dateIsBooked(state.selectedApartmentId, date);
        const inRange = dateInSelectedRange(date);
        return `
          <button type="button" class="calendar-day ${booked ? "booked" : ""} ${inRange ? "selected-range" : ""}" data-date="${date}">
            ${index + 1}
          </button>
        `;
      }).join("");

      return `
        <div class="calendar-month">
          <h3>${monthName}</h3>
          <div class="calendar-weekdays">
            <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
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

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.selectedApartmentId) {
    searchMessage.textContent = "Please select an apartment first.";
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
    searchMessage.textContent = "Please select your dates by dragging across the calendar.";
    searchMessage.classList.add("error");
    reservationSection.hidden = true;
    return;
  }

  if (nights < 3) {
    state.search = null;
    searchMessage.textContent = "Minimum stay is 3 nights. Please choose a longer stay.";
    searchMessage.classList.add("error");
    renderApartments();
    renderCalendar();
    reservationSection.hidden = true;
    return;
  }

  if (totalGuests > apartment.guests) {
    state.search = null;
    searchMessage.textContent = `${apartment.name} fits maximum ${apartment.guests} guests, not counting infants.`;
    searchMessage.classList.add("error");
    renderCalendar();
    reservationSection.hidden = true;
    return;
  }

  state.search = { checkIn, checkOut, adults, children, infants, totalGuests, nights };
  if (!isAvailable(state.selectedApartmentId)) {
    searchMessage.textContent = "No available apartment for the chosen dates.";
    searchMessage.classList.add("error");
    reservationSection.hidden = true;
    renderCalendar();
    return;
  }

  selectedApartment.value = apartment.name;
  reservationMessage.textContent = `${apartment.name} is available for ${nights} nights. Please enter the guest details.`;
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
    guestStepMessage.textContent = "Maximum available capacity is 6 guests in Apartment 5, not counting infants.";
    guestStepMessage.classList.add("error");
    return;
  }

  state.guests = { adults, children, infants, totalGuests };
  guestSummary.textContent = `Showing apartment categories for ${totalGuests} guest${totalGuests === 1 ? "" : "s"}${infants ? ` plus ${infants} infant${infants === 1 ? "" : "s"}` : ""}. Each category is shown in a different rectangle.`;
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

  if (!state.search) {
    reservationMessage.textContent = "Please search dates first.";
    reservationMessage.classList.add("error");
    return;
  }

  if (!state.selectedApartmentId) {
    reservationMessage.textContent = "Please select an available apartment.";
    reservationMessage.classList.add("error");
    return;
  }

  if (!isAvailable(state.selectedApartmentId)) {
    reservationMessage.textContent = "No available apartment for the chosen dates.";
    reservationMessage.classList.add("error");
    renderApartments();
    return;
  }

  const apartment = apartments.find((item) => item.id === state.selectedApartmentId);
  const reservation = {
    id: crypto.randomUUID(),
    apartmentId: apartment.id,
    apartmentName: apartment.name,
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
  reservationMessage.textContent = `Reservation confirmed for ${reservation.apartmentName}.`;
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
