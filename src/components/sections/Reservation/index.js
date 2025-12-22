'use client';

import React, { useState } from 'react';

import { ContactForm } from './components/ContactForm';
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
              <ContactForm
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
