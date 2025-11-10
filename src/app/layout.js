import { Inter } from 'next/font/google';

import '../styles/globals.css';
import AxeDevtools from '../components/AxeDevtools';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ThemeProvider from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://marker99restaurant.com'),
  title: {
    default:
      'Marker 99 Restaurant & Lounge | Waterfront Seafood Restaurant in Melbourne, FL',
    template: '%s | Marker 99 Restaurant & Lounge',
  },
  description:
    'Marker 99 Restaurant & Lounge is Melbourne, Florida’s riverfront seafood restaurant for dockside dining, fresh local fish, raw bar favorites, and live music on the Indian River.',
  keywords: [
    'Melbourne FL waterfront restaurant',
    'riverfront seafood restaurant',
    'fresh local fish Melbourne Florida',
    'waterfront dining Melbourne FL',
    'Indian River restaurant Melbourne',
    'casual fine dining Melbourne Florida',
    'seafood restaurant near Eau Gallie',
    'best restaurants on US-1 Melbourne',
  ],
  alternates: {
    canonical: '/',
  },
  category: 'Seafood Restaurant',
  other: {
    'geo.position': '28.17695;-80.648076',
    'geo.placename': 'Melbourne, Florida',
    'geo.region': 'US-FL',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marker99restaurant.com',
    siteName: 'Marker 99 Restaurant & Lounge',
    title:
      'Marker 99 Restaurant & Lounge | Waterfront Seafood Restaurant in Melbourne, FL',
    description:
      'Experience Marker 99 Restaurant & Lounge – Melbourne, Florida’s waterfront seafood restaurant for riverfront dining, coastal cocktails, and nightly live music on the Indian River.',
    images: [
      {
        url: 'https://marker99restaurant.com/copyright/night-deck.webp',
        width: 1200,
        height: 630,
        alt: 'Marker 99 waterfront deck at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Marker 99 Restaurant & Lounge | Waterfront Seafood Restaurant in Melbourne, FL',
    description:
      'Waterfront seafood restaurant in Melbourne, Florida with fresh local fish, dockside dining, and live music on the Indian River.',
    creator: '@marker99restaurant',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <a
          href="#main-content"
          className="absolute left-4 top-4 -translate-y-full focus:translate-y-0 focus:outline focus:outline-2 focus:outline-white z-50 bg-customDark text-white px-4 py-2 rounded"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <AxeDevtools />
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
