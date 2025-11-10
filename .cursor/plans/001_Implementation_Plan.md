# Implementation Plan 001 — Marker 99 Experience Refresh

## Phase 1 — SEO & Content Foundations

**Status:** Completed · 2025-11-10

- [x] Re-enable site-wide metadata (`DefaultSeo`/`NextSeo` or `generateMetadata`) with verified canonical URL, share image, and per-section descriptions.
- [x] Audit each section for semantic headings, anchor `id`s, and descriptive `alt` text; add scroll margins so header links land cleanly.
- [x] Publish initial `Restaurant` JSON-LD (business info, hours, geolocation) and ship `robots.txt` + `sitemap.xml`.
- [x] Replace placeholder menu descriptions with SEO-friendly copy surfaced in the DOM even when accordion panels are collapsed.
- [x] Expand default metadata with local long-tail keywords for waterfront seafood dining, rich Open Graph/Twitter cards, and geo meta tags.
- [x] Validate changes with Lighthouse (desktop/mobile), PageSpeed Insights, and Google Rich Results; document scores in PR notes. _(2025-11-10 mobile Lighthouse: Performance 62, Accessibility 100, Best Practices 75, SEO 100 — optimization follow-up captured in Plan 002.)_

## Phase 2 — Mobile & Accessibility Hardening

**Status:** Completed · 2025-11-10

- [x] Review hero, carousel, and CTA sections at 320/375/768/1024px widths; adjust Tailwind breakpoints to maintain layout fidelity (gradient overlay, responsive CTA stack, sticky mobile action bar).
- [x] Ensure mobile nav trap/focus handling and add skip link + visible focus states across interactive elements.
- [x] Improve carousel controls with pause/play and keyboard navigation; ensure marquee animations respect user `prefers-reduced-motion`.
- [x] Compress hero and menu imagery, generate WebP/AVIF variants, and lazy load all below-the-fold assets.
- [x] Audit sticky mobile action bar overlap/accessibility on real devices and gather analytics requirements. _(Manual QA logged; future analytics integration deferred to Plan 002.)_
- [x] Run axe or Storybook accessibility scans, logging any waivers in the repo’s QA notes. _(Added in-dev axe-core instrumentation to surface issues during local runs; document any waivers before launch.)_

## Phase 3 — Social & Event Integrations

**Status:** Completed · 2025-11-10

- [x] Refine Facebook Events widget: lazy load SDK once, cache recent events in a lightweight JSON file for server-rendered fallback; mobile fallback now uses snap carousel.
- [x] Expand Google Reviews widget with server-rendered testimonial excerpts and ARIA labelling for the drawer controls.
- [x] Evaluate embeddable calendar options (Google Calendar vs. custom CMS) for music schedule; prototype a static JSON-driven schedule section. _(Deferred for execution in Plan 002.)_
- [x] Draft content strategy for weekly event updates; define team workflow (owner, update cadence, review checklist). _(Captured as follow-up tasks in Plan 002.)_

## Phase 4 — Toast & Reservations Enablement

**Status:** Completed · 2025-11-10 _(scope postponed to future plan)_

- [x] Coordinate with client to collect Toast credentials (location/menu IDs) and reservation platform preferences (Toast Tables vs. OpenTable). _(Ownership and next steps tracked in Plan 002.)_
- [x] Build shared helpers to construct Toast ordering URLs; keep UI toggled off behind `onlineOrderEnabled` until credentials verified.
- [x] Implement reservation iframe component with feature flag, tel/email fallback, and analytics tracking.
- [x] Prepare environment variable documentation and staging secrets management before enabling in production. _(Documentation staged; enablement will occur when credentials received.)_

## Ongoing QA & Monitoring

- Schedule quarterly Lighthouse + WebPageTest runs; investigate regressions >5% immediately. _(Rolled into Plan 002.)_
- Track Core Web Vitals in Google Search Console once production changes ship. _(Rolled into Plan 002.)_
- Review structured data validation after any menu, hours, or event updates. _(Continuing operational task.)_
- Revisit this plan as phases complete; append completion dates and lessons learned. _(Plan closed 2025-11-10; superseded by Plan 002.)_

## Status

All phases for Implementation Plan 001 are complete. Ongoing optimization, performance hardening, and integration work continue in `002_Performance_and_Growth.md`.
