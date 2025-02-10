'use client';

import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import SEO from '../../next-seo.config';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

// Dynamic imports with lazy loading
const Hero = dynamic(() => import('../components/Hero'), { ssr: true });
const AboutUs = dynamic(() => import('../components/AboutUs'), {
  ssr: true,
});
const Contact = dynamic(() => import('../components/Contact'), { ssr: true });
const Events = dynamic(() => import('../components/Events'), { ssr: false });
const ImageCarousel = dynamic(() => import('../components/ImageCarousel'), {
  ssr: true,
});
const JobApplication = dynamic(() => import('../components/JobApplication'), {
  ssr: false,
});
const Reservation = dynamic(() => import('../components/Reservation'), {
  ssr: true,
});
const Menu = dynamic(() => import('../components/Menu'), { ssr: false });
const GoogleReviewWidget = dynamic(
  () => import('../components/GoogleReviewWidget'),
  { ssr: false },
);

export default function Home() {
  const [showTopButton, setShowTopButton] = useState(false);
  const onlineReservation = false;
  const onlineOrder = false;
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
      {/* <NextSeo {...SEO} /> */}
      <Hero />
      <section className="relative bg-customDark text-white py-12">
        <div className="absolute inset-0">
          <Image
            src="/copyright/overhead-shot-1.jpg"
            alt="Background Image"
            fill
            className="opacity-50"
          />
        </div>
        <AboutUs />
        <ImageCarousel />
      </section>
      <Reservation onlineReservation={onlineReservation} />
      <section className="relative bg-customDark text-white py-12">
        <div className="absolute inset-0">
          <Image
            src="/copyright/overhead-shot-2.jpg"
            alt="Background Image"
            fill
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative">
          <Events />
          <Menu onlineOrder={onlineOrder} />
        </div>
      </section>

      <Contact />
      {isHiring && <JobApplication />}

      {showTopButton && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-customGreen text-white rounded-full shadow-lg hover:bg-customGreen transition"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
      <GoogleReviewWidget />
    </>
  );
}
