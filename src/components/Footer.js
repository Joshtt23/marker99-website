'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { trackEvent, AnalyticsEvent } from '../lib/analytics/events';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/copyright/MARKER-99-LOGO.png"
            alt="Marker 99 Logo"
            width={80}
            height={80}
            className="h-16 w-16"
            loading="lazy"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-customGreen">
            Marker 99 Restaurant & Lounge
          </p>
          <p className="max-w-xl text-sm text-foreground/70">
            Casual waterfront dining in Melbourne, Florida — chef-crafted
            seafood, craft cocktails, and live music on the Indian River.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.25em] text-foreground/75">
          <Link href="#home" className="hover:text-foreground">
            Home
          </Link>
          <Link href="#about" className="hover:text-foreground">
            About
          </Link>
          <Link href="#menu" className="hover:text-foreground">
            Menu
          </Link>
          <Link href="#events" className="hover:text-foreground">
            Events
          </Link>
          <Link href="#reserve" className="hover:text-foreground">
            Reserve
          </Link>
          <Link href="#contact" className="hover:text-foreground">
            Contact
          </Link>
        </nav>

        <div className="space-y-2 text-sm text-foreground/70">
          <a
            href="https://maps.google.com/?q=4263+US-1,+Melbourne,+FL+32935"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent(AnalyticsEvent.DIRECTIONS_CLICK, { source: 'footer' })
            }
            className="block hover:text-customGreen transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
            aria-label="Get directions to Marker 99 Restaurant at 4263 US-1, Melbourne, FL 32935"
          >
            4263 US-1, Melbourne, FL 32935
          </a>
          <a
            href="tel:3212531369"
            onClick={() =>
              trackEvent(AnalyticsEvent.PHONE_CLICK, { source: 'footer' })
            }
            className="block hover:text-customGreen transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
            aria-label="Call Marker 99 Restaurant at (321) 253-1369"
          >
            (321) 253-1369
          </a>
          <a
            href="mailto:info@marker99restaurant.com"
            className="block hover:text-customGreen transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
            aria-label="Email Marker 99 Restaurant at info@marker99restaurant.com"
          >
            info@marker99restaurant.com
          </a>
        </div>

        <div className="text-xs text-foreground/70">
          © {new Date().getFullYear()} Marker 99 Restaurant & Lounge · Website
          designed by Joshua Traver
        </div>
      </div>
    </footer>
  );
};

export default Footer;
