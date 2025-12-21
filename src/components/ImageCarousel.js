import React from 'react';

import Image from 'next/image';

const images = [
  { src: '/copyright/overhead-shot-1.jpg', alt: 'Aerial view of Marker 99 waterfront restaurant' },
  { src: '/copyright/overhead-shot-2.jpg', alt: 'Aerial view of Marker 99 dock extending over the river' },
  { src: '/copyright/night-deck.webp', alt: 'Night deck with guests dining over the Indian River at Marker 99' },
  { src: '/copyright/entry.webp', alt: 'Marker 99 restaurant entrance and exterior' },
];

const ImageCarousel = () => {
  // Duplicate the images array to create a seamless loop.
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div className="flex animate-scroll">
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:basis-1/3 lg:basis-1/4 px-2"
          >
            <div className="relative w-full h-60">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Inline styles for the scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageCarousel;
