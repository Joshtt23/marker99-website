import React from 'react';
const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative px-6 py-20 md:px-16 lg:px-20 scroll-mt-32 bg-background text-foreground"
    >
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center space-y-10">
        <div className="space-y-4">
          <h3 id="contact-heading" className="text-3xl md:text-4xl font-semibold text-foreground">
            We look forward to welcoming you
          </h3>
          <p className="text-lg text-foreground/75">
            Join us along the Indian River for relaxed afternoons, sunset dinners, and live
            waterfront evenings.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 text-sm md:text-base text-foreground/75">
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6">
            <p className="uppercase tracking-[0.3em] text-xs text-customGreen mb-2">
              Visit
            </p>
            <p>4263 US-1, Melbourne, FL 32935</p>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6">
            <p className="uppercase tracking-[0.3em] text-xs text-customGreen mb-2">Call</p>
            <a href="tel:3212531369" className="hover:text-customGreen transition">
              (321) 253-1369
            </a>
          </div>
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6 md:col-span-2">
            <p className="uppercase tracking-[0.3em] text-xs text-customGreen mb-2">Hours</p>
            <p className="space-y-1">
              Monday – Thursday: 11:30 AM – 9:00 PM
              <br />
              Friday – Saturday: 11:30 AM – 10:00 PM
              <br />
              Sunday: 10:30 AM – 8:00 PM
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11829.780786119112!2d-80.64873625995675!3d28.176463230760376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de055b4652d25f%3A0x3cc0d60512790449!2sMarker%2099%20Restaurant%20%26%20Lounge!5e0!3m2!1sen!2sus!4v1695326803489!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
            title="Marker 99 Restaurant & Lounge Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
