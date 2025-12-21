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

| Variable                                                  | Purpose                                            |
| --------------------------------------------------------- | -------------------------------------------------- |
| `NEXT_PUBLIC_ONLINE_ORDERING_ENABLED` (`true`/`false`)    | Toggles Toast online ordering UI                   |
| `NEXT_PUBLIC_ONLINE_RESERVATION_ENABLED` (`true`/`false`) | Enables reservation iframe embed                   |
| `NEXT_PUBLIC_TOAST_LOCATION_ALIAS`                        | Toast location alias (`marker99-restaurant-...`)   |
| `NEXT_PUBLIC_TOAST_MENU_ID`                               | Toast menu identifier used for order links         |
| `NEXT_PUBLIC_RESERVATION_PROVIDER`                        | `toast`, `opentable`, etc. for analytics labelling |
| `NEXT_PUBLIC_RESERVATION_EMBED_URL`                       | Reservation widget URL when provider is active     |
| `RESEND_API_KEY`                                          | Resend API key for sending contact form emails     |

Feature defaults are defined in `src/lib/siteConfig.js`. Keep production secrets out of version control; manage them through the chosen deployment platform.

## Email Setup (Resend)

Contact forms and large party inquiries are sent via Resend. To enable email sending:

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the Resend dashboard
3. **Verify your email address** (or domain) in Resend:
   - Go to Resend Dashboard → Domains
   - Add and verify `irmarker99@gmail.com` (or your domain)
   - This is required for the "from" address
4. **Add the API key** to your environment variables:
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

**Note:** Without `RESEND_API_KEY`, forms will still work but emails won't be sent. The API will log email content to the console in development mode.

## Quality Checklist

- Follow the latest guidance in `.cursor/rules/restaurant-experience.mdc` for SEO, accessibility, and mobile standards.
- Validate Lighthouse scores ≥ 90 (Performance, Accessibility, SEO) in both mobile and desktop modes before releasing.
- Re-run Google Rich Results tests after metadata or structured data changes.
- Update `plans/001_Implementation_Plan.md` as milestones are completed or scope shifts.
- Use the built-in mobile action bar, responsive hero, and horizontal menu categories as reference patterns when adding new sections.

## Testing

- Local dev now runs `@axe-core/react` automatically (see browser console) to flag accessibility issues. Resolve or document console warnings before merging.
- Use Lighthouse or WebPageTest for performance/SEO audits; target scores ≥ 90 in mobile and desktop modes.
- Automated testing setup can be expanded as needed; see `.cursor/rules/testing.mdc` for expectations.

## Deployment

Deployments run best on Vercel. Ensure `public/robots.txt` and `public/sitemap.xml` remain accurate for the production domain (`https://marker99restaurant.com/`).
