'use client';

import React, { useState } from 'react';
import OnlineOrder from './OnlineOrder';
import MenuItems from './data/MenuItems';
import Image from 'next/image';

const Menu = ({ onlineOrder }) => {
  const categories = Object.keys(MenuItems);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="container mx-auto p-6 text-white bg-customDark rounded-xl scroll-mt-32"
    >
      <h2
        id="menu-heading"
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Explore the Marker 99 Menu
      </h2>
      <div
        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
        role="tablist"
        aria-label="Menu categories"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              id={`${category}-tab`}
              aria-selected={isActive}
              aria-controls={`${category}-panel`}
              onClick={() => setActiveCategory(category)}
              className={`text-xl md:text-2xl font-bold capitalize px-4 py-2 transition-colors border-b-2 ${
                isActive
                  ? 'text-customGreen border-customGreen'
                  : 'border-transparent text-white/70 hover:text-white'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen`}
            >
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          );
        })}
      </div>
      <div>
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <div
            key={category}
              role="tabpanel"
              id={`${category}-panel`}
              aria-labelledby={`${category}-tab`}
              className={`${isActive ? 'block' : 'hidden'} mb-12`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MenuItems[category].map((item, index) => (
                  <div key={index} className="flex">
                    {item.image !== '' ? (
                      <div className="w-1/3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={500}
                          height={500}
                          className="w-full h-auto rounded-lg object-cover"
                          loading="lazy"
                          sizes="(max-width: 768px) 40vw, 200px"
                        />
                      </div>
                    ) : null}
                    <div className="w-2/3 pl-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-xl font-bold text-customGreen">
                          {item.price}
                        </div>
                        {onlineOrder && <OnlineOrder item={item} />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
