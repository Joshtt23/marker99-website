'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import { getUpcomingEvents } from './data/events';
import { trackEvent, AnalyticsEvent } from '../lib/analytics/events';
import { siteFeatureFlags } from '../lib/siteConfig';

const Events = () => {
  const { facebookEventsWidgetEnabled } = siteFeatureFlags;
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [widgetWidth, setWidgetWidth] = useState(500);
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    if (!facebookEventsWidgetEnabled) {
      return;
    }

    // Suppress Facebook SDK console errors (they're non-fatal and expected)
    const originalError = console.error;
    const suppressFacebookErrors = (...args) => {
      const errorString = args[0]?.toString() || '';
      const fullMessage = args.map((arg) => String(arg)).join(' ');
      if (
        errorString.includes('ErrorUtils caught an error') ||
        errorString.includes('Could not find element') ||
        errorString.includes('DataStore.get: namespace is required') ||
        fullMessage.includes('Could not find element') ||
        fullMessage.includes('u_1_')
      ) {
        // Suppress Facebook SDK internal errors
        return;
      }
      originalError.apply(console, args);
    };

    const updateWidth = () => {
      if (!widgetContainerRef.current) {
        return;
      }
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
        console.error = originalError;
        window.removeEventListener('resize', updateWidth);
      };
    }

    // Suppress Facebook SDK errors (always, not just in dev)
    console.error = suppressFacebookErrors;

    const script = document.createElement('script');
    script.src =
      'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      setSdkLoaded(true);
      // Keep error suppression active (Facebook SDK continues to throw non-fatal errors)
    };
    script.onerror = () => {
      setSdkLoaded(false);
      console.error = originalError;
    };
    document.body.appendChild(script);

    return () => {
      console.error = originalError;
      script.onload = null;
      script.onerror = null;
      window.removeEventListener('resize', updateWidth);
    };
  }, [facebookEventsWidgetEnabled]);

  useEffect(() => {
    if (!facebookEventsWidgetEnabled || !sdkLoaded) {
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }

    // Wait for FB to be available and initialized
    const checkAndInitFB = () => {
      if (!window.FB) {
        setTimeout(checkAndInitFB, 100);
        return;
      }

      const FB = window.FB;

      // Initialize Facebook SDK if not already initialized
      try {
        if (FB && typeof FB.init === 'function') {
          // Check if already initialized by trying to access a property
          if (!FB._initialized) {
            FB.init({
              xfbml: true,
              version: 'v14.0',
            });
          }
        }

        // Wait a bit for initialization, then parse
        setTimeout(() => {
          if (FB?.XFBML?.parse && widgetContainerRef.current) {
            FB.XFBML.parse(widgetContainerRef.current);
          }
        }, 100);
      } catch (error) {
        // Silently handle initialization errors
        console.warn('Facebook SDK initialization error:', error);
      }
    };

    checkAndInitFB();
  }, [facebookEventsWidgetEnabled, sdkLoaded, widgetWidth]);

  const upcomingEvents = useMemo(() => getUpcomingEvents(3), []);
  const hasUpcomingEvents = upcomingEvents.length > 0;

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
            Catch nightly entertainment, chef pop-ups, and seasonal
            celebrations. Follow our Facebook page for the latest waterfront
            happenings at Marker 99.
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
                role="region"
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

          {hasUpcomingEvents ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
              {upcomingEvents.map((event) => (
                <article
                  key={`${event.title}-${event.startDate}`}
                  className="rounded-3xl border border-foreground/10 bg-black/25 p-6 flex flex-col justify-between text-left"
                  aria-label={`Event: ${event.title}`}
                >
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">
                      {event.title}
                    </h4>
                    <p className="text-sm uppercase tracking-wide text-customGreen mb-4">
                      {event.formattedDate}
                    </p>
                    <p className="text-foreground/75">{event.description}</p>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent(AnalyticsEvent.EVENT_CLICK, {
                        source: 'event-card',
                        eventTitle: event.title,
                      })
                    }
                    className="mt-6 inline-flex items-center text-customGreen hover:text-customGreen/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                    aria-label={`View details for ${event.title} on Facebook`}
                  >
                    View on Facebook
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-foreground/75">
              New events are being planned. Check back soon or follow us on
              Facebook for the latest schedule.
            </p>
          )}
          {!sdkLoaded && facebookEventsWidgetEnabled && (
            <p className="mt-8 text-sm text-foreground/75">
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
