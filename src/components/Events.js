'use client';

import React, { useEffect, useRef, useState } from 'react';
import { siteFeatureFlags } from '../lib/siteConfig';
import { fallbackEvents } from './data/events';

const Events = () => {
  const { facebookEventsWidgetEnabled } = siteFeatureFlags;
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [widgetWidth, setWidgetWidth] = useState(500);
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    if (!facebookEventsWidgetEnabled) return;

    const updateWidth = () => {
      if (!widgetContainerRef.current) return;
      setWidgetWidth((prev) => {
        const measured =
          Math.min(
            Math.floor(widgetContainerRef.current.offsetWidth || 0),
            1200,
          ) || prev;
        return measured;
      });
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    if (
      document.querySelector(
        'script[src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0"]',
      )
    ) {
      setSdkLoaded(true);
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
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
      window.removeEventListener('resize', updateWidth);
    };
  }, [facebookEventsWidgetEnabled]);

  useEffect(() => {
    if (!facebookEventsWidgetEnabled || !sdkLoaded) return;
    if (typeof window === 'undefined') return;
    const FB = window.FB;
    if (FB?.XFBML?.parse && widgetContainerRef.current) {
      FB.XFBML.parse(widgetContainerRef.current);
    }
  }, [facebookEventsWidgetEnabled, sdkLoaded, widgetWidth]);

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="py-20 md:py-24 bg-background scroll-mt-8 md:scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 text-center">
        <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-10 md:p-14 shadow-[0_25px_45px_-20px_rgba(0,0,0,0.6)]">
          <h3
            id="events-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
          >
            Live Music & Events
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12">
            Catch nightly entertainment, chef pop-ups, and seasonal celebrations.
            Follow our Facebook page for the latest waterfront happenings at
            Marker 99.
          </p>
          {facebookEventsWidgetEnabled && (
            <div
              ref={widgetContainerRef}
              className="mb-12 mx-auto w-full"
              style={{ maxWidth: '1200px' }}
            >
              <div
                className="fb-page"
                data-href="https://www.facebook.com/marker99restaurant"
                data-tabs="timeline"
                data-width={widgetWidth}
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
                aria-label="Facebook updates and events feed for Marker 99"
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
            {fallbackEvents.map((event) => (
              <article
                key={event.title}
                className="rounded-3xl border border-foreground/10 bg-black/25 p-6 flex flex-col justify-between text-left"
                aria-label={`Event: ${event.title}`}
              >
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {event.title}
                  </h4>
                  <p className="text-sm uppercase tracking-wide text-customGreen mb-4">
                    {event.date}
                  </p>
                  <p className="text-foreground/75">{event.description}</p>
                </div>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-customGreen hover:text-customGreen/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                  aria-label={`View details for ${event.title} on Facebook`}
                >
                  View on Facebook
                </a>
              </article>
            ))}
          </div>
          {!sdkLoaded && facebookEventsWidgetEnabled && (
            <p className="mt-8 text-sm text-foreground/60">
              Trouble loading Facebook? Use the event cards above or{' '}
              <a
                href="https://www.facebook.com/marker99restaurant/events"
                className="underline text-customGreen"
              >
                open the events page directly
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
