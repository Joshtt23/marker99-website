import React from 'react';

export const ReservationEmbed = ({ embedUrl, provider }) => {
  return (
    <div className="rounded-3xl overflow-hidden border border-foreground/10 shadow-lg shadow-black/30 bg-white text-black">
      <iframe
        src={embedUrl}
        width="100%"
        height="520"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title={`${provider} reservation widget`}
      ></iframe>
    </div>
  );
};


