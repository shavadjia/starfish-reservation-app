# Calendar synchronization

The guest calendar reads `data/external-availability.json`. A GitHub Actions job refreshes this file every 15 minutes from the secure Starfish availability service.

The Booking.com export URLs remain encrypted on the server and are never published in this repository. New reservations, date changes, and cancellations are reflected by the next successful sync.

Airbnb export calendars can also be added later as GitHub Actions repository secrets:

- `AIRBNB_APT_1_ICAL` through `AIRBNB_APT_12_ICAL`

The export URLs must come from the corresponding platform. Do not use the public Starfish `calendars/*.ics` links as inbound feeds; those links are for exporting direct website reservations to Booking.com and Airbnb.

After saving Airbnb secrets, run **Sync Booking and Airbnb calendars** once from the repository's Actions page. Future refreshes run automatically.
