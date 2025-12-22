'use client';

import React, { useMemo, useState } from 'react';

import dynamic from 'next/dynamic';

// Lazy-load EventsCalendar - only load when calendar is opened
const EventsCalendar = dynamic(() => import('../EventsCalendar'), {
  ssr: false,
});
// Lazy-load FacebookWidget - reduce initial bundle size
const FacebookWidget = dynamic(
  () =>
    import('./components/FacebookWidget').then((mod) => ({
      default: mod.FacebookWidget,
    })),
  {
    ssr: false,
  },
);
import { EventCard } from './components/EventCard';
import { EventsHeader } from './components/EventsHeader';
import { getUpcomingEvents } from '../../../lib/helpers/events';

const Events = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
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
          <EventsHeader onCalendarOpen={() => setIsCalendarOpen(true)} />
          <FacebookWidget />
          {hasUpcomingEvents ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
              {upcomingEvents.map((event) => (
                <EventCard
                  key={`${event.title}-${event.startDate}`}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <p className="text-sm text-foreground/75">
              New events are being planned. Check back soon or follow us on
              Facebook for the latest schedule.
            </p>
          )}
        </div>
      </div>
      <EventsCalendar
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
    </section>
  );
};

export default Events;
