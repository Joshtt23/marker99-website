## Marker 99 Restaurant & Lounge

Marker 99 is a Next.js site that highlights waterfront dining, live music, and cocktail experiences in Melbourne, Florida. The project follows team-specific rules captured in `.cursor/rules/*.md` for components, SEO, logging, and more.

## Getting Started

1. Install dependencies (project uses Yarn):

   ```bash
   yarn install
   ```

2. Launch the dev server:

   ```bash
   yarn dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Feature Flags & Environment Variables

Set the following optional variables to enable future integrations:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_ONLINE_ORDERING_ENABLED` (`true`/`false`) | Toggles Toast online ordering UI |
| `NEXT_PUBLIC_ONLINE_RESERVATION_ENABLED` (`true`/`false`) | Enables reservation iframe embed |
| `NEXT_PUBLIC_TOAST_LOCATION_ALIAS` | Toast location alias (`marker99-restaurant-...`) |
| `NEXT_PUBLIC_TOAST_MENU_ID` | Toast menu identifier used for order links |
| `NEXT_PUBLIC_RESERVATION_PROVIDER` | `toast`, `opentable`, etc. for analytics labelling |
| `NEXT_PUBLIC_RESERVATION_EMBED_URL` | Reservation widget URL when provider is active |

Feature defaults are defined in `src/lib/siteConfig.js`. Keep production secrets out of version control; manage them through the chosen deployment platform.

## Quality Checklist

- Follow the latest guidance in `.cursor/rules/restaurant-experience.mdc` for SEO, accessibility, and mobile standards.
- Validate Lighthouse scores ≥ 90 (Performance, Accessibility, SEO) in both mobile and desktop modes before releasing.
- Re-run Google Rich Results tests after metadata or structured data changes.
- Update `plans/001_Implementation_Plan.md` as milestones are completed or scope shifts.

## Testing

Use Lighthouse, axe, or similar accessibility tools to verify regressions. Automated testing setup can be expanded as needed; see `.cursor/rules/testing.mdc` for expectations.

## Deployment

Deployments run best on Vercel. Ensure `public/robots.txt` and `public/sitemap.xml` remain accurate for the production domain (`https://marker99restaurant.com/`).
