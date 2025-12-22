import React from 'react';

import { trackEvent, AnalyticsEvent } from '../../../../lib/analytics/events';

export const PhoneReservation = ({ phoneHref, displayPhone }) => {
  return (
    <div className="rounded-3xl border border-foreground/10 bg-black/20 p-8 md:p-10 text-center space-y-6">
      <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
        Reserve by Phone
      </h3>
      <p className="text-foreground/75 text-base md:text-lg max-w-2xl mx-auto">
        Online reservations are coming soon. Until then, our hosts are available
        daily to help you secure a waterfront table, answer menu questions, and
        coordinate celebrations.
      </p>
      <ul className="text-sm md:text-base text-foreground/70 space-y-2 leading-relaxed max-w-xl mx-auto">
        <li>• Same-day seating updates and waitlist management</li>
        <li>• Preferred timing for sunsets, happy hour, and live music</li>
        <li>• Recommendations for dietary needs or special toasts</li>
      </ul>
      <div className="pt-4">
        <a
          href={`tel:${phoneHref}`}
          onClick={() =>
            trackEvent(AnalyticsEvent.PHONE_CLICK, {
              source: 'reservation-section',
            })
          }
          className="inline-block text-2xl md:text-3xl font-semibold text-customGreen hover:text-customGreen/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-customGreen transition-colors"
          aria-label={`Call Marker 99 at ${displayPhone}`}
        >
          {displayPhone}
        </a>
      </div>
    </div>
  );
};
