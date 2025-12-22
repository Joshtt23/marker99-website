'use client';

import { useState, useEffect } from 'react';

import dynamic from 'next/dynamic';

import { ArrowUp } from 'lucide-react';

// Lazy-load heavy components to reduce initial bundle size
const GoogleReviewWidget = dynamic(
  () => import('./features/GoogleReviewWidget'),
  {
    ssr: false,
  },
);
// Lazy-load JobApplication since it's conditionally rendered (isHiring = false)
// This prevents react-dropzone from being bundled when not needed
const JobApplication = dynamic(() => import('./features/JobApplication'), {
  ssr: false,
});

import MobileActionBar from './layout/MobileActionBar';
import AboutUs from './sections/AboutUs';
import Contact from './sections/Contact';
import Events from './sections/Events';
import Hero from './sections/Hero';
import Menu from './sections/Menu';
import Reservation from './sections/Reservation';

export default function HomePageClient({ featureFlags }) {
  const [showTopButton, setShowTopButton] = useState(false);
  const {
    onlineReservationEnabled,
    onlineOrderingEnabled,
    googleReviewsWidgetEnabled,
  } = featureFlags;
  const isHiring = false;

  useEffect(() => {
    // Throttle scroll handler to reduce main-thread work
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldShow = window.scrollY > window.innerHeight;
          setShowTopButton(shouldShow);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <section className="bg-background py-20 md:py-24">
        <AboutUs />
      </section>
      <Menu onlineOrder={onlineOrderingEnabled} />
      <Events />
      <Reservation onlineReservation={onlineReservationEnabled} />
      <Contact />
      {isHiring && <JobApplication />}

      {showTopButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-20 md:bottom-8 right-6 md:right-8 p-3 bg-customGreen text-white rounded-full shadow-lg hover:bg-customGreen transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
      {googleReviewsWidgetEnabled && <GoogleReviewWidget />}
      <MobileActionBar />
    </>
  );
}
