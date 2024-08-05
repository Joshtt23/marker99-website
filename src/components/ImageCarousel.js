import React from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const images = [
  { src: '/images/menu-item-1.jpg', alt: 'Menu Item 1' },
  { src: '/images/menu-item-2.jpg', alt: 'Menu Item 2' },
  { src: '/images/menu-item-3.jpg', alt: 'Menu Item 3' },
  { src: '/images/menu-item-4.jpg', alt: 'Menu Item 4' },
  { src: '/images/menu-item-5.jpg', alt: 'Menu Item 5' },
  { src: '/images/menu-item-6.jpg', alt: 'Menu Item 6' },
];

const ImageCarousel = () => (
  <div className="relative">
    <Carousel
      className="swiper-container"
      autoplay
      loop
      speed={500}
      autoplayDelay={5000}
      pauseOnHover
    >
      <CarouselContent className="swiper-wrapper">
        {images.map((image, index) => (
          <CarouselItem key={index} className="swiper-slide">
            <div className="relative w-full h-60">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <i className="eicon-chevron-left"></i>
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <i className="eicon-chevron-right"></i>
      </CarouselNext>
    </Carousel>
  </div>
);

export default ImageCarousel;
