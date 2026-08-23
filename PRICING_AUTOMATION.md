# Starfish authorized Booking.com price automation

The GitHub Pages reservation app reads public, privacy-safe nightly rates from the secure Sites backend. Booking.com machine-account credentials stay only on the server and are never committed to this repository or sent to a guest's browser.

The backend retrieves 93 days of official room-level nightly rates, subtracts EUR 10, validates all 12 apartments, and returns maintenance status on any authentication, mapping, completeness, freshness, or price validation error. This static `data/nightly-rates.json` file is deliberately a fail-safe; it keeps the app under construction whenever the secure backend is unavailable.
