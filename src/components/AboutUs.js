import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => (
  <div
    id="about"
    className="container relative mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between"
  >
    {/* Left Column with Text and Button */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-10">
      <h4 className="text-lg font-semibold text-green-500 mb-2">
        Marker 99, Melbourne FL
      </h4>
      <h2 className="text-4xl font-bold mb-4">
        Chef-prepared seafood dishes, on the waterfront!
      </h2>
      <p className="text-lg mb-6">
        Marker 99 Restaurant & Lounge is the perfect place to enjoy fresh, local
        seafood in Melbourne, FL. Our waterfront location offers panoramic views
        of the Indian River and our chef prepares delicious dishes using only
        the freshest ingredients. Our staff provides excellent service in an
        elegant atmosphere, making your dining experience truly unforgettable.
        So come on down and see what all the fuss is about!
      </p>
      <Link
        href="https://www.google.com/maps/place/Marker+99+Restaurant+%26+Lounge/@28.17695,-80.648076,15z/data=!4m5!3m4!1s0x0:0x3756c0de0f2bb513!8m2!3d28.1769243!4d-80.6481327?hl=en"
        className="bg-white text-black py-2 px-4 rounded-lg shadow hover:bg-gray-200 transition duration-300"
      >
        Find Us on Maps
      </Link>
    </div>

    {/* Right Column with Image */}
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start p-20">
      <Image
        src="/copyright/chef.jpg"
        alt="Chef Portrait"
        width={705}
        height={717}
        className="object-cover rounded-lg shadow-lg"
      />
    </div>
  </div>
);

export default AboutUs;
