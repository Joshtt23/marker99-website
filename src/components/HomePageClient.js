'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

const Hero = dynamic(() => import('./Hero'), { ssr: true });
const AboutUs = dynamic(() => import('./AboutUs'), { ssr: true });
const Contact = dynamic(() => import('./Contact'), { ssr: true });
const Events = dynamic(() => import('./Events'), { ssr: false });
const ImageCarousel = dynamic(() => import('./ImageCarousel'), { ssr: true });
const JobApplication = dynamic(() => import('./JobApplication'), { ssr: false });
const Reservation = dynamic(() => import('./Reservation'), { ssr: true });
const Menu = dynamic(() => import('./Menu'), { ssr: false });
const GoogleReviewWidget = dynamic(() => import('./GoogleReviewWidget'), {
  ssr: false,
});

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <section className="relative bg-customDark text-white py-12">
        <div className="absolute inset-0">
          <Image
            src="/copyright/overhead-shot-1.jpg"
            alt="Background Image"
            fill
            className="opacity-50"
            sizes="100vw"
            priority={false}
          />
        </div>
        <AboutUs />
        <ImageCarousel />
      </section>
      <Reservation onlineReservation={onlineReservationEnabled} />
      <section className="relative bg-customDark text-white py-12">
        <div className="absolute inset-0">
          <Image
            src="/copyright/overhead-shot-2.jpg"
            alt="Background Image"
            fill
            className="opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative">
          <Events />
          <Menu onlineOrder={onlineOrderingEnabled} />
        </div>
      </section>

      <Contact />
      {/* Testimonials temporarily disabled pending updated content */}
      {isHiring && <JobApplication />}

      {showTopButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-customGreen text-white rounded-full shadow-lg hover:bg-customGreen transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
      {googleReviewsWidgetEnabled && <GoogleReviewWidget />}
    </>
  );
}

