import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const images = [
  { src: '/menu/TunaSteakSalad.jpg', alt: 'Tuna Steak Salad' },
  { src: '/menu/CeaserSalad.jpg', alt: 'Ceaser Salad' },
  { src: '/menu/IslandChowder.jpg', alt: 'Island Seafood Chowder' },
  { src: '/menu/FishSandwich.jpg', alt: 'Spicy Cripsy Fish Sandwich' },
  { src: '/menu/MargFlatbread.jpg', alt: 'Margherita Flatbread' },
];

const ImageCarousel = () => (
  <div className="">
    <Carousel
      className="swiper-container"
      opts={{
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        },
      }}
    >
      <CarouselContent className="swiper-wrapper flex">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="swiper-slide flex-shrink-0 w-full md:basis-1/3 lg:basis-1/4 px-2"
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg">
        <ChevronLeft className="text-black h-6 w-6" />
      </CarouselPrevious>
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg">
        <ChevronRight className="text-black h-6 w-6" />
      </CarouselNext>
    </Carousel>
  </div>
);

export default ImageCarousel;
