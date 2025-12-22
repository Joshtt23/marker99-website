import React from 'react';

const LocationDiagram = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11829.780786119112!2d-80.64873625995675!3d28.176463230760376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de055b4652d25f%3A0x3cc0d60512790449!2sMarker%2099%20Restaurant%20%26%20Lounge!5e0!3m2!1sen!2sus!4v1695326803489!5m2!1sen!2sus"
      width="100%"
      height="420"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-2xl w-full"
      title="Marker 99 Restaurant & Lounge Location"
    />
  );
};

export default LocationDiagram;
