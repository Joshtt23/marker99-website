# Implementation Plan 002 — Performance & Growth

## Phase 1 — Performance & Core Web Vitals

**Status:** In progress

- [ ] Profile production bundle using `ANALYZE=true next build` and identify JS/CSS to tree-shake (target: reduce unused JS by 30%).
- [ ] Optimize LCP/FCP assets: preload hero imagery, confirm `next/image` sizes, and compress any remaining JPEG/PNG assets flagged by Lighthouse.
- [ ] Evaluate third-party widgets (Facebook, Google Maps) for lazy-loading or user-triggered loading to reduce main-thread blocking time.
- [ ] Re-run Lighthouse (mobile + desktop, incognito) and document scores; ensure Performance ≥ 90 and TBT < 200 ms.

## Phase 2 — Monitoring & Analytics

**Status:** Planned

- [ ] Establish recurring Lighthouse + WebPageTest checks (quarterly) and set up a tracking doc in the repo.
- [ ] Enable Core Web Vitals monitoring via Google Search Console and document access/ownership.
- [ ] Define analytics requirements for the mobile action bar and reservations, including event naming and data-layer expectations.

## Phase 3 — Content & Social Presence

**Status:** Planned

- [ ] Select and prototype an embeddable live-events calendar (Google Calendar vs. custom CMS) with fallbacks for no-script users.
- [ ] Finalize weekly event content workflow: assign owner, update cadence, and QA checklist.
- [ ] Plan long-form content (blog/news or FAQ) targeting high-intent keywords such as “best waterfront brunch Melbourne FL” and “live music seafood restaurant Melbourne Florida”.

## Phase 4 — Toast & Reservations Enablement

**Status:** Planned

- [ ] Collect Toast credentials (location alias, menu ID) and reservation vendor decision; document handoff requirements.
- [ ] Prepare environment variable management and staging secrets for enabling online ordering/reservations.
- [ ] Define rollout plan with feature flags, analytics, and QA sign-off before flipping to production.

## Ongoing QA

- Review structured data after menu/hours/event updates and rerun Google Rich Results tests as needed.
- Log accessibility issues surfaced by the in-dev `@axe-core/react` checks; capture waivers in QA notes when applicable.


