# Calendar health automation

The reservation app treats the secure Sites availability endpoint as the only live source of truth. The endpoint audits all 24 configured feeds (Booking.com and Airbnb for apartments 1–12) every five minutes when requested.

Checks include:

- all 24 feed secrets are present;
- each URL is HTTPS and matches the expected Booking.com or Airbnb export format;
- no calendar URL is assigned to more than one apartment/platform;
- every request succeeds within 15 seconds;
- every response is a valid iCalendar document;
- active events have valid check-in/check-out dates;
- cancelled events are excluded;
- overlapping Booking/Airbnb blocks and same-platform blocks are reported as review warnings;
- the health report and availability data are fresh.

Critical problems return HTTP 503 with `status: "maintenance"`, keep `reservationsEnabled: false`, and send the guest to the Under Construction page. The browser rechecks calendar health every five minutes. GitHub Actions mirrors the privacy-safe blocks and health report every 15 minutes and keeps the last known blocks if an upstream check fails.

The scheduled GitHub workflow also fails visibly when the audit is critical, so the repository owner can receive the normal GitHub Actions failure alert instead of a silent sync failure.

Cross-platform overlap warnings do not automatically mean a double booking because imported channel calendars commonly repeat the same stay. They are surfaced for review without exposing guest information or secret calendar URLs.
