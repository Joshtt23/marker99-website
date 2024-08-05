// src/components/Reservation.js
import React from 'react';

const Reservation = () => (
  <section className="bg-gray-900 text-white p-8 text-center" id="reserve">
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">For Large Groups and Events</h2>
        <h2 className="text-4xl font-bold">
          <a href="tel:321-253-1369" className="text-white underline">
            (321) 253-1369
          </a>
        </h2>
      </div>
    </div>
  </section>
);

export default Reservation;
