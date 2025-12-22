# Marker 99 Website Upgrade Checklist

## Purpose

Align the site experience with the January relaunch concept: dual dining/tiki offerings, refreshed menus, analytics tracking, and campaign support.

## Phase 1 – Messaging & Structure

- [ ] Update global metadata (`src/app/page.js`) to emphasize Latin–Mediterranean fusion + lounge concept.
- [ ] Refresh hero CTA block with clear path to “Reserve Dining” and “Explore Tiki Lounge.”
- [ ] Add new section describing Dining Room vs Tiki Lounge experiences, including hours, seating policy, and signature highlights.
- [ ] Review all existing copy (About, Menu intro, Reservation, Footer) for consistency with new positioning.

## Phase 2 – Menu & Content Assets

- [ ] Replace menu JSON data with new dishes/pricing (Dining & Lounge small plates).
- [x] Add featured cocktail carousel or gallery for lounge offerings.
- [ ] Integrate January theme-night schedule into Events section (extend `events.js` or add static data block).
- [ ] Ensure imagery reflects updated spaces (new lounge photos, chef action shots).

## Phase 3 – Conversion Paths & Forms

- [ ] Build email signup form component (homepage + footer) connected to chosen email platform.
- [ ] Stand up certificate redemption/offer form (with optional QR landing page).
- [ ] Clarify reservation vs walk-in guidance in `Reservation` section (e.g., “Lounge is walk-in friendly”).
- [ ] Add CTA buttons for joining insider list, booking private events, and viewing lounge calendar.

## Phase 4 – Analytics & Tracking

- [x] Embed GA4 (global script) and configure key events (page_view, reservation_click, email_signup, certificate_submit).
- [x] Install Meta Pixel with custom conversions for reservations & lounge offers.
- [ ] Add UTM tagging guidelines to README for promo campaigns.
- [ ] Document GA4 + Pixel IDs in `.env.example`.

## Phase 5 – Performance & Accessibility

- [ ] Retest Lighthouse performance after new sections.
- [ ] Verify responsive layout for all new blocks (hero, lounge section, forms).
- [x] Double-check alt text/captions for new imagery.
- [x] Confirm keyboard navigation and focus states for forms/CTAs.

## Phase 6 – Launch Support

- [ ] Create dedicated landing page or modal for January “Relaunch Week” schedule.
- [ ] Set up announcement banner (e.g., `next/dynamic` banner component) for limited-time offers.
- [ ] Schedule content deployment timeline (copy freeze, QA, go-live).

## Phase 7 – Admin Panel & Content Management

**Prerequisites**: Google account access for OAuth authentication, Sanity CMS account, Email platform account (ConvertKit/Brevo)

- [ ] Set up Google OAuth credentials for NextAuth.js authentication.
- [ ] Install and configure NextAuth.js with Google provider.
- [ ] Create protected admin route structure (`/admin/*`).
- [ ] Set up Sanity CMS project and configure content schemas (Events, Specials, Promotions).
- [ ] Build admin dashboard UI with navigation (Events, Specials, Subscribers, Analytics).
- [ ] Create Events management interface (CRUD operations via Sanity API).
- [ ] Create Specials/Promotions management interface (CRUD operations via Sanity API).
- [ ] Migrate existing events from `events.json` to Sanity CMS.
- [ ] Update frontend Events component to fetch from Sanity API instead of JSON.
- [ ] Set up email list integration (ConvertKit/Brevo API).
- [ ] Build subscriber management view (read-only, export functionality).
- [ ] Create analytics dashboard (fetch metrics from GA4 Reporting API and Meta Pixel API).
- [ ] Add image upload functionality for events/specials (Sanity asset handling).
- [ ] Document admin panel access and usage in README.
- [ ] Set up environment variables for all API keys (Sanity, ConvertKit/Brevo, Google OAuth, GA4 API).

**Note**: This phase uses external APIs (Sanity, ConvertKit/Brevo, GA4) as the data layer—no database required. All content and subscriber data lives in these services.

## Documentation & Handoff

- [x] Update README with instructions for updating menus, events, and forms.
- [ ] Provide simple SOP for exporting GA4/Looker Studio weekly report.
- [ ] Outline process for swapping hero/event images post-launch.
- [ ] Document admin panel setup and API key requirements in README.

Use this checklist to track development work alongside the operational rollout plan. Mark items complete as they ship so the relaunch stays aligned across marketing, operations, and the website.
