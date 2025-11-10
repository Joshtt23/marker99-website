import HomePageClient from '../components/HomePageClient';
import RestaurantJsonLd from '../components/seo/RestaurantJsonLd';
import { siteFeatureFlags } from '../lib/siteConfig';

export const metadata = {
  title:
    'Waterfront Seafood Dining in Melbourne, FL | Marker 99 Restaurant & Lounge',
  description:
    'Dine at Marker 99 Restaurant & Lounge for riverfront seafood, raw bar favorites, craft cocktails, and live music in Melbourne, Florida near Eau Gallie and the Indian River Lagoon.',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'waterfront seafood Melbourne FL',
    'riverfront dining Indian River Lagoon',
    'Melbourne Florida live music restaurant',
    'fresh catch seafood Melbourne',
    'best dockside restaurants Melbourne FL',
  ],
  openGraph: {
    url: 'https://marker99restaurant.com',
    title:
      'Waterfront Seafood Dining in Melbourne, FL | Marker 99 Restaurant & Lounge',
    description:
      'Enjoy chef-driven seafood, dockside cocktails, and nightly live music with sweeping Indian River views at Marker 99 Restaurant & Lounge in Melbourne, Florida.',
    images: [
      {
        url: 'https://marker99restaurant.com/copyright/night-deck.webp',
        width: 1200,
        height: 630,
        alt: 'Marker 99 riverfront deck prepared for evening guests',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Waterfront Seafood Dining in Melbourne, FL | Marker 99 Restaurant & Lounge',
    description:
      'Marker 99 Restaurant & Lounge serves fresh local seafood, waterfront views, and live music nightly in Melbourne, Florida.',
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
