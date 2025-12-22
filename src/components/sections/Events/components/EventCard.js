import React from 'react';

import Image from 'next/image';

import {
  FaFacebook,
  FaInstagram,
  FaSoundcloud,
  FaTiktok,
} from 'react-icons/fa';

import { trackEvent, AnalyticsEvent } from '../../../../lib/analytics/events';

export const EventCard = ({ event }) => {
  return (
    <article
      key={`${event.title}-${event.startDate}`}
      className="rounded-3xl border border-foreground/10 bg-black/25 overflow-hidden flex flex-col text-left"
      aria-label={`Event: ${event.title}`}
    >
      {/* Artist Image */}
      {event.image && (
        <div className="relative w-full h-48 bg-foreground/5">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h4 className="text-xl font-semibold mb-2 text-foreground">
            {event.title}
          </h4>
          <p className="text-sm uppercase tracking-wide text-customGreen mb-4">
            {event.formattedDate}
          </p>
          <p className="text-foreground/75 mb-4">{event.description}</p>
        </div>
        {/* Social Links */}
        {event.socialLinks && (
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {event.socialLinks.facebook && (
              <a
                href={event.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(AnalyticsEvent.EVENT_CLICK, {
                    source: 'social-link',
                    platform: 'facebook',
                    eventTitle: event.title,
                  })
                }
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                aria-label={`${event.title} on Facebook`}
              >
                <FaFacebook className="h-5 w-5 text-customGreen" />
              </a>
            )}
            {event.socialLinks.instagram && (
              <a
                href={event.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(AnalyticsEvent.EVENT_CLICK, {
                    source: 'social-link',
                    platform: 'instagram',
                    eventTitle: event.title,
                  })
                }
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                aria-label={`${event.title} on Instagram`}
              >
                <FaInstagram className="h-5 w-5 text-customGreen" />
              </a>
            )}
            {event.socialLinks.soundcloud && (
              <a
                href={event.socialLinks.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(AnalyticsEvent.EVENT_CLICK, {
                    source: 'social-link',
                    platform: 'soundcloud',
                    eventTitle: event.title,
                  })
                }
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                aria-label={`${event.title} on SoundCloud`}
              >
                <FaSoundcloud className="h-5 w-5 text-customGreen" />
              </a>
            )}
            {event.socialLinks.tiktok && (
              <a
                href={event.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent(AnalyticsEvent.EVENT_CLICK, {
                    source: 'social-link',
                    platform: 'tiktok',
                    eventTitle: event.title,
                  })
                }
                className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
                aria-label={`${event.title} on TikTok`}
              >
                <FaTiktok className="h-5 w-5 text-customGreen" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
