const siteUrl = 'https://marker99restaurant.com';
const shareImagePath = `${siteUrl}/copyright/night-deck.webp`;

export const defaultSeo = {
  titleTemplate: '%s | Marker 99 Restaurant & Lounge',
  defaultTitle: 'Marker 99 Restaurant & Lounge',
  description:
    'Waterfront dining, craft cocktails, and live music in Melbourne, Florida.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Marker 99 Restaurant & Lounge',
    title: 'Marker 99 Restaurant & Lounge',
    description:
      'Waterfront dining, craft cocktails, and live music in Melbourne, Florida.',
    images: [
      {
        url: shareImagePath,
        width: 1200,
        height: 630,
        alt: 'Marker 99 Restaurant & Lounge riverfront deck at sunset',
      },
    ],
  },
  twitter: {
    handle: '@marker99restaurant',
    site: '@marker99restaurant',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export const homeSeo = {
  title: 'Waterfront Dining in Melbourne, FL',
  description:
    'Marker 99 Restaurant & Lounge pairs chef-driven seafood, craft cocktails, and live music with sweeping Indian River views.',
  canonical: siteUrl,
  openGraph: {
    url: siteUrl,
    title: 'Waterfront Dining in Melbourne, FL | Marker 99 Restaurant & Lounge',
    description:
      'Experience Marker 99 on the Indian River — fresh seafood, craft cocktails, and nightly music in Melbourne, Florida.',
    images: [
      {
        url: shareImagePath,
        width: 1200,
        height: 630,
        alt: 'Marker 99 riverfront deck prepared for evening guests',
      },
    ],
  },
};
