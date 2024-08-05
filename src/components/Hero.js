import React from 'react';
import Image from 'next/image';

const Hero = () => (
  <section className="relative w-full h-screen overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/images/hero-background.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 p-6">
      <h1 className="text-5xl font-bold mb-4">
        Riverfront Restaurant & Lounge
      </h1>
      <p className="text-xl mb-8">Come for the drinks, stay for the meal.</p>
      <div className="space-x-4">
        <a
          href="#menu"
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          View Menu
        </a>
        <a
          href="#reserve"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Make a Reservation
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
