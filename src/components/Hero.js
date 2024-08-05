import React from 'react';
import Image from 'next/image';

const Hero = () => (
  <section className="bg-customDark relative w-full min-h-screen flex items-center justify-center overflow-hidden">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full p-6">
      {/* Left Column */}
      <div className="relative z-10 flex flex-col justify-center text-white md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 md:mb-4">
          Riverfront Restaurant & Lounge
        </h1>
        <p className="text-xl md:text-2xl mb-2 md:mb-4">
          The perfect spot for any occasion.
        </p>
        <p className="text-lg mb-4 md:mb-8">
          Come for the drinks, stay for the meal. Experience the finest dining
          by the river with a breathtaking view and exceptional service.
        </p>
        <div className="space-x-4">
          <a
            href="#menu"
            className="bg-customGreen text-white py-3 px-6 rounded-full shadow-lg hover:bg-customGreen transition duration-300"
          >
            View Menu
          </a>
          <a
            href="#reserve"
            className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Make a Reservation
          </a>
        </div>
      </div>
      {/* Right Column */}
      <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <div
          className="relative w-100 h-150 md:w-96 md:h-96 shadow-lg"
          style={{ boxShadow: '10px 10px 20px -10px #61CE70' }}
        >
          <Image
            src="/copyright/night-deck.webp"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
