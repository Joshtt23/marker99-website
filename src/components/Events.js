'use client';

import React, { useEffect, useState } from 'react';
import { siteFeatureFlags } from '../lib/siteConfig';
import { fallbackEvents } from './data/events';

const Events = () => {
  const { facebookEventsWidgetEnabled } = siteFeatureFlags;
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (!facebookEventsWidgetEnabled) return;

    if (
      document.querySelector(
        'script[src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"]',
      )
    ) {
      setSdkLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => setSdkLoaded(true);
    script.onerror = () => setSdkLoaded(false);
    document.body.appendChild(script);

    return () => {
      script.onload = null;
      script.onerror = null;
    };
  }, [facebookEventsWidgetEnabled]);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="bg-customDark/80 text-white py-12 text-center m-20 rounded-3xl scroll-mt-32"
    >
      <div className="container mx-auto px-4">
        <h3
          id="events-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
        >
          Live Music & Events
        </h3>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
          Catch nightly entertainment, chef pop-ups, and seasonal celebrations. Follow our Facebook
          page for the latest waterfront happenings at Marker 99.
        </p>
        {facebookEventsWidgetEnabled && (
          <div className="flex justify-center">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/marker99restaurant"
              data-tabs="events"
              data-width="500"
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
              aria-label="Facebook events feed for Marker 99"
            >
              <blockquote
                cite="https://www.facebook.com/marker99restaurant"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/marker99restaurant">
                  Marker 99 Restaurant & Lounge
                </a>
              </blockquote>
            </div>
          </div>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {fallbackEvents.map((event) => (
            <article
              key={event.title}
              className="bg-white/10 rounded-2xl p-6 h-full flex flex-col justify-between"
              aria-label={`Event: ${event.title}`}
            >
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">
                  {event.title}
                </h4>
                <p className="text-sm uppercase tracking-wide text-customGreen mb-4">
                  {event.date}
                </p>
                <p className="text-white/80">{event.description}</p>
              </div>
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center text-customGreen hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                aria-label={`View details for ${event.title} on Facebook`}
              >
                View on Facebook
              </a>
            </article>
          ))}
        </div>
        {!sdkLoaded && facebookEventsWidgetEnabled && (
          <p className="mt-8 text-sm text-white/60">
            Trouble loading Facebook? Use the event cards above or{' '}
            <a
              href="https://www.facebook.com/marker99restaurant/events"
              className="underline"
            >
              open the events page directly
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
};

export default Events;
