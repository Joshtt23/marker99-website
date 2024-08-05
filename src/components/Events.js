'use client';

import React, { useEffect } from 'react';

const Events = () => {
  useEffect(() => {
    // Load the Facebook SDK script
    const loadFacebookSDK = () => {
      const script = document.createElement('script');
      script.src =
        'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    };

    loadFacebookSDK();
  }, []);

  return (
    <section className="bg-gray-100 p-8 text-center" id="events">
      <h3 className="text-2xl font-bold mb-4">Live Music & Events</h3>
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
    </section>
  );
};

export default Events;
