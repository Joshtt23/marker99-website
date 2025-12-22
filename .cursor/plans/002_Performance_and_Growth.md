# Implementation Plan 002 — Performance & Growth

**Current Lighthouse Scores:**

- Performance: 87/100 (target: ≥90)
- Best Practices: 96/100 (target: 100)
- SEO: 100/100 ✅
- Accessibility: (not measured in latest report)

**Key Issues to Address:**

- Total Blocking Time: 440ms (target: <200ms)
- Max Potential FID: 216ms (target: <100ms)
- Main-thread work: 3.1s total (Style & Layout: 854ms, Script Evaluation: 784ms)
- Unused JavaScript: 107 KiB (two chunks: 86.4 KB + 22.8 KB wasted)
- React error #418: Console error affecting Best Practices score
- Facebook SDK ERR_BLOCKED_BY_CLIENT: Needs better error handling

## Phase 1 — Performance & Core Web Vitals

**Status:** In progress

### Bundle Analysis & Code Splitting

- [ ] Profile production bundle using `ANALYZE=true next build` and identify JS/CSS to tree-shake.
- [ ] Analyze specific chunks flagged by Lighthouse:
  - `8c5093ac698444cc.js`: 86.4 KB wasted (63% of 136 KB) — identify and remove unused code
  - `349ff5d670a6f4a0.js`: 22.8 KB wasted (32% of 71 KB) — identify and remove unused code
- [ ] Implement dynamic imports for heavy components (EventsCalendar, FacebookWidget, GoogleReviewWidget).
- [ ] Code split route-based chunks and lazy-load below-the-fold components.
- [ ] Target: Reduce unused JS by 30% (from 107 KiB to ~75 KiB).

### Main-Thread Work Optimization

- [ ] Reduce Style & Layout work (currently 854ms):
  - Audit CSS-in-JS usage and move to static CSS where possible.
  - Use CSS containment for isolated components.
  - Optimize Tailwind class usage to reduce runtime calculations.
- [ ] Reduce Script Evaluation time (currently 784ms):
  - Defer non-critical JavaScript execution.
  - Use `requestIdleCallback` for non-urgent work.
  - Break up long-running tasks into smaller chunks.
- [ ] Optimize "Other" main-thread work (currently 1,178ms):
  - Profile with Chrome DevTools Performance tab to identify bottlenecks.
  - Optimize React rendering with `React.memo` and `useMemo` where appropriate.

### Total Blocking Time (TBT) & First Input Delay (FID)

- [ ] Reduce TBT from 440ms to <200ms:
  - Implement code splitting and lazy loading (see above).
  - Defer third-party scripts until after initial render.
  - Optimize main-thread work (see above).
- [ ] Reduce Max Potential FID from 216ms to <100ms:
  - Break up long tasks (>50ms) into smaller chunks.
  - Use `scheduler.postTask` or `setTimeout` to yield to browser.
  - Optimize component initialization and hydration.

### Third-Party Scripts & Widgets

- [ ] Optimize Facebook SDK loading:
  - Improve error handling for `ERR_BLOCKED_BY_CLIENT` (ad blockers).
  - Lazy-load Facebook widget only when Events section is visible (IntersectionObserver).
  - Consider user-triggered loading (load on button click instead of page load).
- [ ] Evaluate Google Maps/Review widgets for lazy-loading or user-triggered loading.
- [ ] Defer analytics scripts (Meta Pixel, TikTok Pixel, GA4) until after page interactive.

### Image & Asset Optimization

- [ ] Optimize LCP/FCP assets: preload hero imagery, confirm `next/image` sizes.
- [ ] Compress any remaining JPEG/PNG assets flagged by Lighthouse.
- [ ] Ensure all images use appropriate `width` and `height` attributes (already passing).

### Console Errors & Best Practices

- [ ] Fix React error #418 (text content issue):
  - Investigate minified error in `349ff5d670a6f4a0.js` chunk.
  - Check for invalid text children in JSX (likely in SelectValue or similar components).
  - Test in development mode to get full error message.
  - Ensure all text content is properly wrapped in valid React elements.
- [ ] Improve Facebook SDK error handling:
  - Add try-catch around SDK initialization.
  - Gracefully degrade when SDK is blocked by ad blockers.
  - Suppress non-fatal Facebook SDK errors (already partially implemented, verify it works).

### Verification & Documentation

- [ ] Re-run Lighthouse (mobile + desktop, incognito) and document scores.
- [ ] Ensure Performance ≥ 90 and TBT < 200 ms.
- [ ] Ensure Best Practices = 100 (fix React error #418).
- [ ] Document performance improvements and new thresholds in README.

## Phase 2 — Monitoring & Analytics

**Status:** Planned

- [ ] Establish recurring Lighthouse + WebPageTest checks (quarterly) and set up a tracking doc in the repo.
- [ ] Enable Core Web Vitals monitoring via Google Search Console and document access/ownership.
- [ ] Define analytics requirements for the mobile action bar and reservations, including event naming and data-layer expectations.

## Ongoing QA

- Review structured data after menu/hours/event updates and rerun Google Rich Results tests as needed.
- Log accessibility issues surfaced by the in-dev `@axe-core/react` checks; capture waivers in QA notes when applicable.
