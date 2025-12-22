import React from 'react';

export const ReservationHeader = () => {
  return (
    <div className="text-center mb-12">
      <h2
        id="reservation-heading"
        className="text-3xl md:text-4xl font-semibold text-foreground"
      >
        Reserve Your Table
      </h2>
      <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
        Whether you're celebrating waterfront with family or planning a sunset
        date night, our reservations team will help you find the perfect table.
      </p>
    </div>
  );
};
