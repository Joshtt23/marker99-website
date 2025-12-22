'use client';

import React, { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

// Lazy load ContactForm to defer Zod and react-hook-form loading
// This reduces initial bundle size since the form is in a scrollable section
const ContactForm = dynamic(
  () =>
    import('./components/ContactForm').then((mod) => ({
      default: mod.ContactForm,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-3xl border border-foreground/10 bg-black/20 p-8 md:p-10">
        <div className="text-center text-foreground/75">Loading form...</div>
      </div>
    ),
  },
);

import { PhoneReservation } from './components/PhoneReservation';
import { ReservationEmbed } from './components/ReservationEmbed';
import { ReservationHeader } from './components/ReservationHeader';
import { reservationConfig } from '../../../lib/siteConfig';

const Reservation = ({ onlineReservation }) => {
  const { embedUrl, provider, phone } = reservationConfig;
  const canRenderEmbed = onlineReservation && embedUrl.length > 0;
  const phoneHref = phone.replace(/[^+\d]/g, '');
  const displayPhone = phone.replace('+1-', '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldLoadForm, setShouldLoadForm] = useState(false);
  const formContainerRef = useRef(null);

  // Use IntersectionObserver to only load ContactForm when it's about to be visible
  // This further reduces initial bundle size by deferring Zod/react-hook-form until needed
  useEffect(() => {
    // Skip if embed is shown (no form needed) or form is already loading
    if (canRenderEmbed || shouldLoadForm || !formContainerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadForm(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }, // Start loading 100px before it's visible for smoother UX
    );

    observer.observe(formContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [canRenderEmbed, shouldLoadForm]);

  return (
    <section
      id="reserve"
      aria-labelledby="reservation-heading"
      className="py-20 md:py-24 bg-background scroll-mt-32"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="rounded-3xl border border-foreground/10 bg-black/25 p-10 md:p-16 backdrop-blur max-w-4xl mx-auto">
          <ReservationHeader />

          {canRenderEmbed ? (
            <ReservationEmbed embedUrl={embedUrl} provider={provider} />
          ) : (
            <div className="space-y-8">
              <PhoneReservation
                phoneHref={phoneHref}
                displayPhone={displayPhone}
              />
              <div ref={formContainerRef}>
                {shouldLoadForm && (
                  <ContactForm
                    isSubmitting={isSubmitting}
                    setIsSubmitting={setIsSubmitting}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
