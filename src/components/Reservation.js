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
      className="py-20 md:py-24 bg-background scroll-mt-32"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="rounded-3xl border border-foreground/10 bg-black/25 p-10 md:p-16 text-center backdrop-blur">
          <h2
            id="reservation-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground"
          >
            Reserve Your Table
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Whether you’re celebrating waterfront with family or planning a
            sunset date night, our reservations team will help you find the
            perfect table.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {canRenderEmbed ? (
              <div className="rounded-3xl overflow-hidden border border-foreground/10 shadow-lg shadow-black/30 bg-white text-black">
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="520"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`${provider} reservation widget`}
                ></iframe>
              </div>
            ) : (
              <div className="rounded-3xl border border-foreground/10 bg-black/20 p-10 text-left space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Book by Phone or Email
                </h3>
                <p className="text-foreground/75">
                  Online reservations are coming soon. In the meantime, please
                  call or email our reservations team for availability.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${phoneHref}`}
                    className="block text-lg font-semibold text-customGreen hover:text-customGreen/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                  >
                    Call: {displayPhone}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="block text-lg font-semibold text-customGreen hover:text-customGreen/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                  >
                    Email: {email}
                  </a>
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-foreground/10 bg-black/20 p-10 text-left text-foreground/85 space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Private Events & Large Parties
              </h3>
              <p>
                Planning a waterfront celebration or corporate mixer? Let us set
                the scene with custom menus, sunset views, and dedicated service
                for groups up to 80 guests.
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li>• Dedicated event coordinator</li>
                <li>• Customizable prix fixe menus</li>
                <li>• Live music options</li>
                <li>• Indoor & outdoor seating</li>
              </ul>
              <a
                href={`mailto:${email}?subject=Marker 99 Event Inquiry`}
                className="inline-flex mt-4 items-center justify-center rounded-full border border-customGreen/40 px-6 py-3 text-sm font-semibold text-customGreen hover:border-customGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
              >
                Inquire About Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
