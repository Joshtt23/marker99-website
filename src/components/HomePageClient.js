'use client';

import { useState, useEffect } from 'react';

import { ArrowUp } from 'lucide-react';

import GoogleReviewWidget from './features/GoogleReviewWidget';
import JobApplication from './features/JobApplication';
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
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
