import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CallToAction = () => (
  <section className="relative bg-gray-100 py-12">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-wrap">
        {/* Left Column with Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex justify-center">
            <Image
              src="https://marker99restaurant.com/wp-content/uploads/2022/08/1.png"
              alt="Restaurant"
              width={705}
              height={717}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Column with Text and Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Marker 99, Melbourne FL
          </h4>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chef-prepared seafood dishes, on the waterfront!
          </h2>
          <p className="text-gray-700 mb-6">
            Marker 99 Restaurant & Lounge is the perfect place to enjoy fresh,
            local seafood in Melbourne, FL. Our waterfront location offers
            panoramic views of the Indian River and our chef prepares delicious
            dishes using only the freshest ingredients. Our staff provides
            excellent service in an elegant atmosphere, making your dining
            experience truly unforgettable. So come on down and see what all the
            fuss is about!
          </p>
          <Link
            href="https://www.google.com/maps/place/Marker+99+Restaurant+%26+Lounge/@28.17695,-80.648076,15z/data=!4m5!3m4!1s0x0:0x3756c0de0f2bb513!8m2!3d28.1769243!4d-80.6481327?hl=en"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Find Us on Maps
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction;
