import React from 'react';
import { reservationConfig } from '../lib/siteConfig';

const Reservation = ({ onlineReservation }) => {
  const { embedUrl, provider, phone, email } = reservationConfig;
  const canRenderEmbed = onlineReservation && embedUrl.length > 0;
  const phoneHref = phone.replace(/[^+\d]/g, '');
  const displayPhone = phone.replace('+1-', '');

  return (
    <section
      id="reserve"
      aria-labelledby="reservation-heading"
      className="bg-customDark text-white py-12 text-center scroll-mt-32"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2
            id="reservation-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2"
          >
            Reserve a Table
          </h2>

          {canRenderEmbed && (
            <div className="w-full md:w-2/3 lg:w-1/2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
                Book a Table Online
              </h3>
              <div className="bg-white p-4 rounded-lg shadow-lg text-gray-900">
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`${provider} reservation widget`}
                ></iframe>
              </div>
            </div>
          )}

          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-2 mt-6">
            For Large Parties or Special Events
          </h3>
          <p className="text-lg md:text-xl text-white/80 mb-6">
            Our hospitality team is happy to assist with waterfront celebrations,
            corporate mixers, and private dining.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href={`tel:${phoneHref}`}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white underline decoration-customGreen decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
              aria-label={`Call Marker 99 at ${displayPhone}`}
            >
              Call: {displayPhone}
            </a>
            <span className="uppercase tracking-widest text-sm text-customGreen">
              or
            </span>
            <a
              href={`mailto:${email}`}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white underline decoration-customGreen decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
              aria-label={`Email Marker 99 at ${email}`}
            >
              Email: {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
