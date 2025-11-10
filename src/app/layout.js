import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://marker99restaurant.com'),
  title: {
    default: 'Marker 99 Restaurant & Lounge',
    template: '%s | Marker 99 Restaurant & Lounge',
  },
  description:
    'Waterfront dining, craft cocktails, and live music in Melbourne, Florida.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marker99restaurant.com',
    siteName: 'Marker 99 Restaurant & Lounge',
    title: 'Marker 99 Restaurant & Lounge',
    description:
      'Marker 99 brings chef-driven seafood, cocktails, and live music to the Indian River in Melbourne, FL.',
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
    title: 'Marker 99 Restaurant & Lounge',
    description:
      'Waterfront dining, craft cocktails, and live music in Melbourne, Florida.',
    creator: '@marker99restaurant',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
