import React from 'react';

const stats = [
  { label: 'Signature Cocktails', value: '25+' },
  { label: 'Live Music Nights Weekly', value: '5' },
  { label: 'Waterfront Seats', value: '120' },
  { label: 'Chef Specials Nightly', value: '3' },
];

const StatsBand = () => (
  <section
    aria-labelledby="stats-heading"
    className="bg-white text-customDark py-12 border-y border-customGreen/20"
  >
    <div className="container mx-auto px-6 lg:px-12">
      <h2 id="stats-heading" className="sr-only">
        Marker 99 Highlights
      </h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <li key={stat.label} className="space-y-2">
            <span className="text-3xl md:text-4xl font-semibold text-customGreen">
              {stat.value}
            </span>
            <p className="text-sm md:text-base uppercase tracking-wide text-customDark/70">
              {stat.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default StatsBand;
