import RestaurantJsonLd from '../components/seo/RestaurantJsonLd';
import HomePageClient from '../components/HomePageClient';
import { siteFeatureFlags } from '../lib/siteConfig';

export const metadata = {
  title: 'Waterfront Dining in Melbourne, FL',
  description:
    'Marker 99 pairs chef-crafted seafood, craft cocktails, and live music with sweeping riverfront views in Melbourne, Florida.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://marker99restaurant.com',
    title: 'Waterfront Dining in Melbourne, FL | Marker 99 Restaurant & Lounge',
    description:
      'Experience chef-driven seafood, dockside cocktails, and live music nightly at Marker 99 Restaurant & Lounge.',
    images: [
      {
        url: 'https://marker99restaurant.com/copyright/night-deck.webp',
        width: 1200,
        height: 630,
        alt: 'Marker 99 riverfront deck prepared for evening guests',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <RestaurantJsonLd />
      <HomePageClient featureFlags={siteFeatureFlags} />
    </>
  );
}
