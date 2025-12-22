# Marker 99 Website Relaunch Plan 2026

## Overview
Comprehensive relaunch plan for Marker 99 Restaurant & Lounge, focusing on foundation building (January–March) followed by Tiki Lounge concept launch (April 2026).

## Timeline Summary
- **January 2026**: Start Phase 3 & 4 (Conversion & Analytics)
- **January–March 2026**: Iteration, testing, and marketing foundation
- **March–April 2026**: Tiki concept ideation and planning
- **April 2026**: Tiki Lounge launch

---

## Phase A: Foundation & Marketing Setup (January–March 2026)

### Goal
Establish conversion paths, analytics tracking, and marketing infrastructure to support the relaunch and future Tiki Lounge launch.

### Phase A.1: Conversion Paths & Forms (January 2026)
**Status**: Starting January 2026  
**Dependencies**: Access to email platform, form requirements finalized

#### Tasks
- [ ] **Email Signup Form**
  - Build email signup component for homepage
  - Add email signup to footer
  - Connect to chosen email platform (Mailchimp, ConvertKit, etc.)
  - Design opt-in flow with clear value proposition
  - Add success/error handling with toast notifications

- [ ] **Certificate Redemption Form**
  - Build certificate/offer redemption form component
  - Create optional QR code landing page route (`/redeem` or `/offer/[code]`)
  - Add form validation and submission handling
  - Design confirmation flow

- [ ] **Reservation Guidance Updates**
  - Update `Reservation` component with walk-in vs reservation guidance
  - Add note: "Lounge is walk-in friendly" (when applicable)
  - Clarify dining room reservation requirements
  - Update copy to reflect current policies

- [ ] **Conversion CTAs**
  - Add "Join Insider List" CTA button (links to email signup)
  - Add "Book Private Event" CTA (links to reservation/contact form)
  - Add "View Lounge Calendar" CTA (links to events section or future lounge page)
  - Place CTAs strategically throughout site (hero, menu, footer)

#### Deliverables
- Email signup form component (homepage + footer)
- Certificate redemption form with QR landing page
- Updated reservation section with clear guidance
- Strategic CTA placement throughout site

---

### Phase A.2: Analytics & Tracking (January–February 2026)
**Status**: Starting January 2026 (pending Google/Meta access)  
**Dependencies**: Google Analytics 4 account, Meta Business account, access credentials

#### Tasks
- [ ] **Google Analytics 4 (GA4) Setup**
  - Embed GA4 global script in `src/app/layout.js`
  - Configure key events:
    - `page_view` (automatic)
    - `reservation_click` (custom event on reservation CTA clicks)
    - `email_signup` (custom event on form submissions)
    - `certificate_submit` (custom event on redemption form)
    - `menu_view` (custom event on menu section views)
    - `event_click` (custom event on event card clicks)
  - Set up conversion goals in GA4 dashboard
  - Test event tracking in development and production

- [ ] **Meta Pixel Installation**
  - Install Meta Pixel script in `src/app/layout.js`
  - Configure custom conversions:
    - Reservation inquiries
    - Email signups
    - Certificate redemptions
    - Lounge offer clicks (future)
  - Set up conversion tracking in Meta Events Manager
  - Test pixel firing and conversions

- [ ] **UTM Tagging System**
  - Add UTM tagging guidelines to README
  - Document campaign naming conventions
  - Create UTM parameter reference guide
  - Set up campaign tracking spreadsheet/template

- [ ] **Environment Configuration**
  - Create `.env.example` file
  - Document required environment variables:
    - `NEXT_PUBLIC_GA4_MEASUREMENT_ID`
    - `NEXT_PUBLIC_META_PIXEL_ID`
  - Add to README with setup instructions
  - Ensure production secrets are managed securely

#### Deliverables
- GA4 fully configured with custom events
- Meta Pixel installed with custom conversions
- UTM tagging documentation
- `.env.example` with analytics IDs documented

---

### Phase A.3: Testing & Iteration (February–March 2026)
**Status**: Ongoing after Phase A.1 & A.2 completion

#### Tasks
- [ ] **Form Testing**
  - Test email signup flow end-to-end
  - Test certificate redemption with various scenarios
  - Verify form validation and error handling
  - Test on mobile and desktop devices

- [ ] **Analytics Validation**
  - Verify all GA4 events are firing correctly
  - Confirm Meta Pixel conversions are tracking
  - Test UTM parameter tracking
  - Generate test reports to validate data flow

- [ ] **Performance Testing**
  - Run Lighthouse audits (target: ≥90 for Performance, Accessibility, SEO)
  - Test page load times with analytics scripts
  - Optimize script loading (defer, async where appropriate)
  - Verify mobile performance

- [ ] **User Experience Testing**
  - Test conversion paths from entry to submission
  - Verify CTA visibility and clarity
  - Test responsive layouts on various devices
  - Gather feedback from staff/internal testing

#### Deliverables
- All forms tested and validated
- Analytics tracking verified and reporting correctly
- Performance benchmarks met
- UX improvements implemented

---

## Phase B: Tiki Lounge Concept Development (March–April 2026)

### Goal
Design, plan, and implement the Tiki Lounge concept separation, creating distinct experiences for Dining Room and Tiki Lounge.

### Phase B.1: Ideation & Planning (March 2026)
**Status**: Planning phase  
**Dependencies**: Operational decisions on lounge concept, hours, menu, staffing

#### Tasks
- [ ] **Concept Definition**
  - Finalize Tiki Lounge concept and positioning
  - Define distinct menu offerings (small plates, cocktails)
  - Establish hours and seating policies
  - Determine reservation vs walk-in approach

- [ ] **Content Strategy**
  - Write copy for Dining Room vs Tiki Lounge section
  - Plan imagery needs (lounge photos, ambiance shots)
  - Design menu structure for dual offerings
  - Create event calendar for lounge-specific events

- [ ] **Design Planning**
  - Design lounge section layout
  - Plan hero CTA updates for dual paths
  - Design menu toggle/filter for Dining vs Lounge
  - Plan announcement banner for launch

#### Deliverables
- Concept brief document
- Content plan for lounge section
- Design mockups/wireframes
- Menu structure plan

---

### Phase B.2: Implementation (March–April 2026)
**Status**: Development phase  
**Dependencies**: Phase B.1 complete, content assets ready

#### Tasks
- [ ] **Messaging & Structure Updates**
  - Update global metadata to emphasize dual concept
  - Refresh hero CTA with "Reserve Dining" and "Explore Tiki Lounge"
  - Add new section describing Dining Room vs Tiki Lounge
  - Review and update all copy for consistency

- [ ] **Menu & Content Assets**
  - Update menu JSON with new dishes/pricing
  - Add lounge-specific small plates section
  - Enhance cocktail carousel/gallery for lounge
  - Integrate lounge event schedule
  - Add new imagery (lounge photos, chef shots)

- [ ] **Launch Support**
  - Create relaunch week landing page or modal
  - Set up announcement banner component
  - Schedule content deployment timeline
  - Plan launch day activities

#### Deliverables
- Updated website with dual concept messaging
- New menu structure with lounge offerings
- Launch page/banner for April launch
- All content assets in place

---

## Phase C: Launch & Post-Launch (April 2026+)

### Goal
Successfully launch Tiki Lounge concept and establish ongoing maintenance processes.

#### Tasks
- [ ] **Pre-Launch Checklist**
  - Final content review and approval
  - Staff training
  - Marketing campaign coordination
  - Analytics baseline established

- [ ] **Launch Day**
  - Deploy website updates
  - Monitor analytics for issues
  - Staff support for customer questions
  - Social media coordination

- [ ] **Post-Launch**
  - Monitor conversion metrics
  - Gather user feedback
  - Iterate on conversion paths
  - Weekly analytics reporting

---

## Documentation & Handoff

### Ongoing Tasks
- [ ] **Analytics Reporting SOP**
  - Create simple guide for exporting GA4 reports
  - Document Looker Studio dashboard setup (if applicable)
  - Establish weekly reporting schedule

- [ ] **Content Management**
  - Document process for updating menus
  - Create guide for updating events
  - Outline image swap process for hero/events
  - Establish content approval workflow

- [ ] **Technical Documentation**
  - Update README with new features
  - Document form submission flows
  - Create troubleshooting guide for analytics
  - Maintain changelog of updates

---

## Success Metrics

### Phase A (Foundation)
- Email signup form live and collecting subscribers
- Certificate redemption form functional
- GA4 tracking all key events
- Meta Pixel conversions configured
- UTM tagging system documented

### Phase B (Tiki Launch)
- Dual concept clearly communicated on site
- Lounge section live with distinct offerings
- Menu toggle working for Dining vs Lounge
- Launch banner/announcement live
- All content assets updated

### Phase C (Post-Launch)
- Analytics showing conversion improvements
- User feedback collected and reviewed
- Staff trained on new features
- Ongoing reporting established

---

## Timeline Visualization

```
January 2026
├── Week 1-2: Phase A.1 (Conversion Forms) - START
├── Week 3-4: Phase A.1 completion + Phase A.2 (Analytics) - START

February 2026
├── Week 1-2: Phase A.2 (Analytics) completion
├── Week 3-4: Phase A.3 (Testing & Iteration)

March 2026
├── Week 1-2: Phase A.3 completion + Phase B.1 (Ideation) - START
├── Week 3-4: Phase B.1 (Planning) completion + Phase B.2 (Implementation) - START

April 2026
├── Week 1-2: Phase B.2 (Implementation) completion
├── Week 3: Phase C (Pre-Launch & Launch)
└── Week 4: Phase C (Post-Launch monitoring)
```

---

## Notes

- **Flexibility**: Timeline may shift based on access to Google/Meta accounts and operational readiness
- **Iteration**: Expect to iterate on forms and analytics setup based on testing results
- **Communication**: Regular check-ins needed between development, marketing, and operations teams
- **Content**: Ensure content assets (photos, copy) are ready before implementation phases

---

## Next Steps

1. **Immediate (January 2026)**:
   - Finalize email platform choice
   - Gather requirements for certificate redemption form
   - Request Google Analytics 4 access
   - Request Meta Business account access

2. **Short-term (January–February 2026)**:
   - Begin Phase A.1 implementation
   - Set up analytics accounts once access granted
   - Start testing conversion paths

3. **Medium-term (March 2026)**:
   - Begin Tiki Lounge concept ideation
   - Plan content strategy
   - Design lounge section

4. **Long-term (April 2026)**:
   - Complete Tiki Lounge implementation
   - Launch and monitor
   - Establish ongoing processes

