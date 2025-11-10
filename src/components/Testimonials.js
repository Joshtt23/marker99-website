import React from 'react';

const testimonials = [
  {
    name: 'Emily R.',
    quote:
      '“Marker 99 is our go-to for date night. The sunset views, handcrafted cocktails, and live music make every visit special.”',
  },
  {
    name: 'Carlos M.',
    quote:
      '“The seafood is always fresh and the staff treats you like family. Highly recommend the Tuna Steak Salad and live music nights.”',
  },
];

const Testimonials = () => (
  <section
    aria-labelledby="testimonials-heading"
    className="bg-white text-customDark py-16"
  >
    <div className="container mx-auto px-6 lg:px-12">
      <h3
        id="testimonials-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        Guests Love Marker 99
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.name}
            className="bg-customDark text-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-lg leading-relaxed">{testimonial.quote}</p>
            <footer className="mt-6 text-sm uppercase tracking-wide text-customGreen">
              {testimonial.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
