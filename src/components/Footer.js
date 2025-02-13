import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-customDark text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Image
            src="/copyright/MARKER-99-LOGO.png"
            alt="Marker 99 Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold">
            Marker 99, Restaurant &amp; Lounge
          </p>
          <p className="text-sm">Contact: info@marker99restaurant.com</p>
          <p className="text-sm">Phone: (321) 253-1369</p>
        </div>
        <div className="mt-4">
          <p className="text-xs">Designed by Joshua Traver</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
