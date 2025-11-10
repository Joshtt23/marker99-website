import React from 'react';
const Hero = () => (
  <section
    id="home"
    aria-labelledby="hero-heading"
    className="bg-background py-24 md:py-32 scroll-mt-32"
  >
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <p className="uppercase tracking-[0.3em] text-sm text-customGreen">
          Casual waterfront dining
        </p>
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-semibold text-foreground"
        >
          Marker 99 Restaurant & Lounge
        </h1>
        <p className="text-lg md:text-xl text-foreground/85">
          Gather with friends and family for chef-crafted seafood, craft
          cocktails, and live music overlooking the Indian River.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full bg-customGreen px-9 py-3 text-sm font-semibold text-brand-primary-foreground shadow-lg shadow-customGreen/30 transition hover:bg-customGreen/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen active:scale-95"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-full border border-foreground/25 px-9 py-3 text-sm font-semibold text-foreground transition hover:border-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen active:scale-95"
          >
            View Menu
          </a>
        </div>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3 text-center text-foreground/90">
        <div className="rounded-2xl border border-foreground/10 bg-black/20 p-6 backdrop-blur space-y-2">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-customGreen">
            Visit Us
          </p>
          <p className="text-sm sm:text-base text-pretty">
            4263 US-1, Melbourne, FL 32935
          </p>
        </div>
        <div className="rounded-2xl border border-foreground/10 bg-black/20 p-6 backdrop-blur space-y-2">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-customGreen">
            Hours
          </p>
          <ul className="text-sm sm:text-base space-y-1 leading-relaxed">
            <li>Mon – Thu: 11:30am – 9:00pm</li>
            <li>Fri – Sat: 11:30am – 10:00pm</li>
            <li>Sun: 10:30am – 8:00pm</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-foreground/10 bg-black/20 p-6 backdrop-blur space-y-2">
          <p className="text-xs sm:text-sm uppercase tracking-wide text-customGreen">
            Reservations
          </p>
          <div className="text-sm sm:text-base leading-relaxed space-y-2">
            <div>
              Call{' '}
              <a
                href="tel:3212531369"
                className="underline hover:text-customGreen whitespace-nowrap"
              >
                (321) 253-1369
              </a>
            </div>
            <div>
              Email{' '}
              <a
                href="mailto:info@marker99restaurant.com"
                className="underline hover:text-customGreen break-words"
              >
                info@marker99restaurant.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
