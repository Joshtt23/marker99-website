import React from 'react';
import Image from 'next/image';

const images = [
  { src: '/menu/TunaSteakSalad.jpg', alt: 'Tuna Steak Salad' },
  { src: '/menu/CaesarSalad.jpg', alt: 'Caesar Salad' },
  { src: '/menu/IslandChowder.jpg', alt: 'Island Seafood Chowder' },
  { src: '/menu/FishSandwich.jpg', alt: 'Spicy Cripsy Fish Sandwich' },
  { src: '/menu/MargFlatbread.jpg', alt: 'Margherita Flatbread' },
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
      `}</style>
    </div>
  );
};

export default ImageCarousel;
