import React from 'react';
import {
  FaSearchLocation,
  FaPhoneAlt,
  FaClock,
  FaAt,
  FaFacebook,
  FaInstagram,
  FaYelp,
  FaTripadvisor,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      className="bg-customDark text-white py-12 px-4 md:px-8"
      id="contact"
    >
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-4xl font-bold mb-4">About Marker 99</h3>
          <p className="mb-8 text-lg">
            Marker 99 is located right on the Indian River in Melbourne, FL and
            offers stunning waterfront views. Our staff provide excellent
            service in an elegant atmosphere, making Marker 99 the perfect place
            to celebrate any special occasion.
            <br />
            <br />
            Whether you’re in the mood for a light lunch or a romantic dinner
            for two, we have something for everyone.
          </p>
          <div className="space-y-8">
            <a
              href="https://www.google.com/maps/place/Marker+99+Restaurant+%26+Lounge/@28.1772005,-80.6509606,1019m/data=!3m1!1e3!4m6!3m5!1s0x88de055b4652d25f:0x3cc0d60512790449!8m2!3d28.17695!4d-80.648076!16s%2Fg%2F11tsmfbf91?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <FaSearchLocation className="text-4xl" />
              <div>
                <h3 className="font-semibold text-xl">VISIT OUR LOCATION</h3>
                <p>4263 US-1, Melbourne, FL 32935</p>
              </div>
            </a>
            <a href="tel:321-253-1369" className="flex items-center space-x-4">
              <FaPhoneAlt className="text-4xl" />
              <div>
                <h3 className="font-semibold text-xl">GIVE US A CALL</h3>
                <p>+1 (321) 253-1369</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/Marker+99+Restaurant+%26+Lounge/@28.1772005,-80.6509606,1019m/data=!3m1!1e3!4m6!3m5!1s0x88de055b4652d25f:0x3cc0d60512790449!8m2!3d28.17695!4d-80.648076!16s%2Fg%2F11tsmfbf91?hl=en&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4"
            >
              <FaClock className="text-4xl" />
              <div>
                <h3 className="font-semibold text-xl">HOURS OF OPERATION</h3>
                <p>
                  SUN: 11:30 AM - 9:00 PM
                  <br />
                  MON: 11:30 AM - 9:00 PM
                  <br />
                  TUE: 11:30 AM - 9:00 PM
                  <br />
                  WED: 11:30 AM - 9:00 PM
                  <br />
                  THU: 11:30 AM - 9:00 PM
                  <br />
                  FRI: 11:30 AM - 10:00 PM
                  <br />
                  SAT: 11:30 AM - 10:00 PM
                  <br /> * Bar open until 11:00 PM Fri & Sat
                </p>
              </div>
            </a>
            <div className="flex items-center space-x-4">
              <FaAt className="text-4xl" />
              <div>
                <h3 className="font-semibold text-xl">FOLLOW US ONLINE</h3>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://www.facebook.com/marker99restaurant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-blue-600 hover:opacity-75"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/marker99_restaurantlounge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-pink-600 hover:opacity-75"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.yelp.com/biz/marker-99-restaurant-and-lounge-melbourne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-red-600 hover:opacity-75"
                  >
                    <FaYelp />
                  </a>
                  <a
                    href="https://www.tripadvisor.com/Restaurant_Review-g34433-d15521460-Reviews-Marker_99_Restaurant_Lounge-Melbourne_Brevard_County_Florida.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-green-600 hover:opacity-75"
                  >
                    <FaTripadvisor />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11829.780786119112!2d-80.64873625995675!3d28.176463230760376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de055b4652d25f%3A0x3cc0d60512790449!2sMarker%2099%20Restaurant%20%26%20Lounge!5e0!3m2!1sen!2sus!4v1695326803489!5m2!1sen!2sus"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
