import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => (
  <section
    id="about"
    aria-labelledby="about-heading"
    className="py-20 md:py-24 bg-surface"
  >
    <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <p className="text-sm uppercase tracking-[0.3em] text-customGreen">
          Meet Chef Andres Raffaelli
        </p>
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-semibold text-foreground"
        >
          A culinary journey brought to your table
        </h2>
        <p className="text-lg text-foreground/80">
          Chef Andres Raffaelli brings a world of flavor to Marker 99. Trained in
          the culinary traditions of Spain, Costa Rica, and Italy, Chef Raffaelli
          crafts a Latin-Mediterranean menu that reflects his international journey. Each dish tells a story—from the
          bold spices of Latin America to the refined techniques of European
          kitchens, all brought together with fresh coastal ingredients. His
          passion for blending these diverse culinary heritages creates the
          unique flavors that define Marker 99's waterfront dining experience.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link
            href="https://www.google.com/maps/place/Marker+99+Restaurant+%26+Lounge/@28.17695,-80.648076,15z/data=!4m5!3m4!1s0x0:0x3756c0de0f2bb513!8m2!3d28.1769243!4d-80.6481327?hl=en"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-3 text-sm font-semibold text-foreground transition hover:border-customGreen hover:text-customGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
          >
            Find Us on Maps
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden rounded-3xl max-w-sm mx-auto">
          <Image
            src="/copyright/chef.jpg"
            alt="Chef preparing a dish at Marker 99"
            width={705}
            height={717}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 80vw, 35vw"
            style={{ outline: 'none', border: 'none' }}
          />
        </div>
        <p className="mt-4 text-xs text-foreground/70 text-center max-w-sm mx-auto">
          Photo © Marker 99 Restaurant & Lounge
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;
