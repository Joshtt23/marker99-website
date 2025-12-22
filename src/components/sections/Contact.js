'use client';

import React from 'react';

import { trackEvent, AnalyticsEvent } from '../../lib/analytics/events';
import LocationDiagram from '../shared/LocationDiagram';

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative px-6 py-20 md:px-16 lg:px-20 scroll-mt-32 bg-background text-foreground"
    >
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center space-y-10">
        <div className="space-y-4">
          <h3
            id="contact-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground"
          >
            We look forward to welcoming you
          </h3>
          <p className="text-lg text-foreground/75">
            Join us along the Indian River for relaxed afternoons, sunset
            dinners, and live waterfront evenings.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-foreground/75">
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6 space-y-3">
            <p className="uppercase tracking-[0.3em] text-xs text-customGreen">
              Visit
            </p>
            <a
              href="https://maps.google.com/?q=Marker+99+Restaurant+%26+Lounge"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent(AnalyticsEvent.DIRECTIONS_CLICK, {
                  source: 'contact',
                })
              }
              className="text-customGreen hover:text-customGreen/80 underline underline-offset-4"
            >
              4263 US-1, Melbourne, FL 32935
            </a>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6">
            <p className="uppercase tracking-[0.3em] text-xs text-customGreen mb-2">
              Call
            </p>
            <a
              href="tel:3212531369"
              onClick={() =>
                trackEvent(AnalyticsEvent.PHONE_CLICK, { source: 'contact' })
              }
              className="hover:text-customGreen transition"
            >
              (321) 253-1369
            </a>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6 md:col-span-2">
            <p className="uppercase tracking-[0.3em] text-xs text-customGreen mb-2">
              Hours
            </p>
            <p className="space-y-1">
              Sunday – Thursday: 11:30 AM – 9:00 PM
              <br />
              Friday – Saturday: 11:30 AM – 10:00 PM
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6 md:p-8 w-full">
          <LocationDiagram />
        </div>
      </div>
    </section>
  );
};

export default Contact;
