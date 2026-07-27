# Calendar synchronization

The guest calendar reads `data/external-availability.json`. A GitHub Actions job refreshes this file every 30 minutes from private Booking.com and Airbnb iCal export URLs.

For every apartment, add the Booking.com export URL and the Airbnb export URL as GitHub Actions repository secrets:

- `BOOKING_APT_1_ICAL` through `BOOKING_APT_12_ICAL`
- `AIRBNB_APT_1_ICAL` through `AIRBNB_APT_12_ICAL`

The export URLs must come from the corresponding platform. Do not use the public Starfish `calendars/*.ics` links as inbound feeds; those links are for exporting direct website reservations to Booking.com and Airbnb.

After saving the secrets, run **Sync Booking and Airbnb calendars** once from the repository's Actions page. Future refreshes run automatically.
