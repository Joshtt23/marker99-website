import React, { useEffect, useRef, useState } from 'react';

import { siteFeatureFlags } from '../../../../lib/siteConfig';

export const FacebookWidget = () => {
  const { facebookEventsWidgetEnabled } = siteFeatureFlags;
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [widgetWidth, setWidgetWidth] = useState(500);
  const widgetContainerRef = useRef(null);

  // Use IntersectionObserver to only load SDK when widget is visible
  useEffect(() => {
    if (!facebookEventsWidgetEnabled || !widgetContainerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }, // Start loading 100px before it's visible
    );

    observer.observe(widgetContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [facebookEventsWidgetEnabled]);

  useEffect(() => {
    if (!facebookEventsWidgetEnabled || !isVisible) {
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
  }, [facebookEventsWidgetEnabled, isVisible]);

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

  if (!facebookEventsWidgetEnabled) {
    return null;
  }

  return (
    <>
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
      {!sdkLoaded && (
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
    </>
  );
};
