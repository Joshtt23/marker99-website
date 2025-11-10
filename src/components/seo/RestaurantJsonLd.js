import Script from 'next/script';

const siteUrl = 'https://marker99restaurant.com';

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Marker 99 Restaurant & Lounge',
  description:
    'Marker 99 Restaurant & Lounge pairs chef-driven seafood, craft cocktails, and live music with sweeping Indian River views in Melbourne, Florida.',
  url: siteUrl,
  telephone: '+1-321-253-1369',
  image: `${siteUrl}/copyright/night-deck.webp`,
  priceRange: '$$',
  servesCuisine: ['Seafood', 'American', 'Cocktail Bar'],
  acceptsReservations: true,
  reservationUrl: `${siteUrl}/#reserve`,
  hasMenu: `${siteUrl}/#menu`,
  sameAs: [
    'https://www.facebook.com/marker99restaurant',
    'https://www.instagram.com/marker99_restaurantlounge/',
    'https://www.yelp.com/biz/marker-99-restaurant-and-lounge-melbourne',
    'https://www.tripadvisor.com/Restaurant_Review-g34433-d15521460-Reviews-Marker_99_Restaurant_Lounge-Melbourne_Brevard_County_Florida.html',
    'https://g.page/marker99restaurant?share',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4263 US-1',
    addressLocality: 'Melbourne',
    addressRegion: 'FL',
    postalCode: '32935',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.17695,
    longitude: -80.648076,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '11:30',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '11:30',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '10:30',
      closes: '20:00',
    },
  ],
};

export default function RestaurantJsonLd() {
  return (
    <Script
      id="restaurant-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
    />
  );
}

