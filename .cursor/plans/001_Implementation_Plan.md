# Implementation Plan 001 — Marker 99 Experience Refresh

## Phase 1 — SEO & Content Foundations

**Status:** In progress

- [x] Re-enable site-wide metadata (`DefaultSeo`/`NextSeo` or `generateMetadata`) with verified canonical URL, share image, and per-section descriptions.
- [x] Audit each section for semantic headings, anchor `id`s, and descriptive `alt` text; add scroll margins so header links land cleanly.
- [x] Publish initial `Restaurant` JSON-LD (business info, hours, geolocation) and ship `robots.txt` + `sitemap.xml`.
- [x] Replace placeholder menu descriptions with SEO-friendly copy surfaced in the DOM even when accordion panels are collapsed.
- [ ] Validate changes with Lighthouse (desktop/mobile), PageSpeed Insights, and Google Rich Results; document scores in PR notes.

## Phase 2 — Mobile & Accessibility Hardening

**Status:** In progress

- [ ] Review hero, carousel, and CTA sections at 320/375/768/1024px widths; adjust Tailwind breakpoints to maintain layout fidelity.
- [x] Ensure mobile nav trap/focus handling and add skip link + visible focus states across interactive elements.
- [x] Improve carousel controls with pause/play and keyboard navigation; ensure marquee animations respect user `prefers-reduced-motion`.
- [x] Compress hero and menu imagery, generate WebP/AVIF variants, and lazy load all below-the-fold assets.
- [ ] Run axe or Storybook accessibility scans, logging any waivers in the repo’s QA notes.

## Phase 3 — Social & Event Integrations

**Status:** In progress

- [x] Refine Facebook Events widget: lazy load SDK once, cache recent events in a lightweight JSON file for server-rendered fallback.
- [x] Expand Google Reviews widget with server-rendered testimonial excerpts and ARIA labelling for the drawer controls.
- [ ] Evaluate embeddable calendar options (Google Calendar vs. custom CMS) for music schedule; prototype a static JSON-driven schedule section.
- [ ] Draft content strategy for weekly event updates; define team workflow (owner, update cadence, review checklist).

## Phase 4 — Toast & Reservations Enablement

**Status:** Not started

- [ ] Coordinate with client to collect Toast credentials (location/menu IDs) and reservation platform preferences (Toast Tables vs. OpenTable).
- [x] Build shared helpers to construct Toast ordering URLs; keep UI toggled off behind `onlineOrderEnabled` until credentials verified.
- [x] Implement reservation iframe component with feature flag, tel/email fallback, and analytics tracking.
- [ ] Prepare environment variable documentation and staging secrets management before enabling in production.

## Ongoing QA & Monitoring

- Schedule quarterly Lighthouse + WebPageTest runs; investigate regressions >5% immediately.
- Track Core Web Vitals in Google Search Console once production changes ship.
- Review structured data validation after any menu, hours, or event updates.
- Revisit this plan as phases complete; append completion dates and lessons learned.

## Open Questions

- Confirm ownership of ongoing menu content updates (chef/marketing?) and establish review cadence.
- Decide on primary booking vendor (Toast vs. OpenTable) and timeline for contract signing.
- Determine if blog/news section is desired for long-form SEO content (chef features, event recaps).

