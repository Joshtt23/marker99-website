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
          Marker 99, Melbourne FL
        </p>
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-semibold text-foreground"
        >
          Chef-prepared seafood, served right on the waterfront
        </h2>
        <p className="text-lg text-foreground/80">
          Our dining room overlooks the Indian River, pairing panoramic views
          with chef-driven dishes built on fresh, local ingredients. Warm
          hospitality and coastal flavors make Marker 99 perfect for date night,
          celebrations, and relaxed family gatherings alike.
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
        <div className="relative overflow-hidden rounded-3xl border border-foreground/10 shadow-lg shadow-black/30">
          <Image
            src="/copyright/chef.jpg"
            alt="Chef preparing a dish at Marker 99"
            width={705}
            height={717}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 80vw, 35vw"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
