const metaData = {
  title: 'Marker 99 Restaurant & Lounge',
  description: 'The best food and drinks in town',
  canonical: 'https://marker99restaurant.com/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://marker99restaurant.com/',
    site_name: 'Marker 99 Restaurant',
    title: 'Marker 99 Restaurant & Lounge',
    description: 'The best food and drinks in town',
    images: [
      {
        url: 'https://marker99restaurant.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Marker 99 Restaurant & Lounge',
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
      property: 'viewport',
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

export default metaData;
