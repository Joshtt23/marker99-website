import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 text-gray-800" id="contact">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Left Column */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-3xl font-bold mb-4">About Marker 99</h3>
          <p className="mb-8">
            Marker 99 is located right on the Indian River in Melbourne, FL and
            offers stunning waterfront views. Our staff provide excellent
            service in an elegant atmosphere, making Marker 99 the perfect place
            to celebrate any special occasion.
            <br />
            <br />
            Whether you’re in the mood for a light lunch or a romantic dinner
            for two, we have something for everyone.
          </p>
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps?ll=28.17695,-80.648076&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=3987586580052948243"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <i className="fas fa-search-location text-2xl"></i>
              <div>
                <h3 className="font-semibold">VISIT OUR LOCATION</h3>
                <p>4263 US-1, Melbourne, FL 32935</p>
              </div>
            </a>
            <a href="tel:321-253-1369" className="flex items-center space-x-2">
              <i className="fas fa-phone-alt text-2xl"></i>
              <div>
                <h3 className="font-semibold">GIVE US A CALL</h3>
                <p>+1 (321) 253-1369</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/Marker+99+Restaurant+%26+Lounge/@28.17695,-80.648076,15z/data=!4m5!3m4!1s0x0:0x3756c0de0f2bb513!8m2!3d28.1769243!4d-80.6481327?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <i className="far fa-clock text-2xl"></i>
              <div>
                <h3 className="font-semibold">HOURS OF OPERATION</h3>
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
                  FRI: 11:30 AM - 11:00 PM
                  <br />
                  SAT: 11:30 AM - 11:00 PM
                </p>
              </div>
            </a>
            <div className="flex items-center space-x-2">
              <i className="fas fa-at text-2xl"></i>
              <div>
                <h3 className="font-semibold">FOLLOW US ONLINE</h3>
                <div>
                  <script
                    src="https://apps.elfsight.com/p/platform.js"
                    defer
                  ></script>
                  <div className="elfsight-app-e4194845-3778-4595-9241-e8413340481a"></div>
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
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
