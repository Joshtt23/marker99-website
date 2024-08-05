import React from 'react';

const Reservation = () => (
  <section className="bg-customDark text-white py-12 text-center" id="reserve">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          Reserve a Table
        </h2>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            Book a Table Online
          </h3>
          <div className="bg-white p-4 rounded-lg shadow-lg text-gray-900">
            <iframe
              src="https://www.toasttab.com/restaurants/reserve"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Online Reservation"
            ></iframe>
          </div>
        </div>
        <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-2 mt-5">
          For Large Parties or Special Events
        </h3>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Call:{' '}
          <a href="tel:321-253-1369" className="text-white underline">
            321-253-1369
          </a>
        </h4>
        - or -
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Email:{' '}
          <a
            href="mailto:irmarker99@gmail.com"
            className="text-white underline"
          >
            IRMarker99@gmail.com
          </a>
        </h4>
      </div>
    </div>
  </section>
);

export default Reservation;
