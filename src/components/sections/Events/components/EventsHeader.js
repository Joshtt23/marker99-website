import React from 'react';

import { Calendar } from 'lucide-react';

import { trackEvent, AnalyticsEvent } from '../../../../lib/analytics/events';

export const EventsHeader = ({ onCalendarOpen }) => {
  return (
    <>
      <h3
        id="events-heading"
        className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6"
      >
        Live Music & Events
      </h3>
      <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6">
        Catch nightly entertainment, chef pop-ups, and seasonal celebrations.
        Follow our Facebook page for the latest waterfront happenings at Marker
        99.
      </p>
      <button
        onClick={() => {
          onCalendarOpen();
          trackEvent(AnalyticsEvent.EVENT_CLICK, {
            source: 'calendar-button',
          });
        }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-customGreen/10 border border-customGreen text-customGreen hover:bg-customGreen/20 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen mb-12"
      >
        <Calendar className="h-5 w-5" />
        <span className="font-semibold">View Full Calendar</span>
      </button>
    </>
  );
};


