'use client';

import React, { useState, useEffect } from 'react';
import OnlineOrder from './OnlineOrder';
import MenuItems from './data/MenuItems';
import Image from 'next/image';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const handleToggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <div
      id="menu"
      className="container mx-auto p-6 text-white bg-customDark rounded-xl"
    >
      <div className="flex flex-wrap justify-center space-x-6 mb-8">
        {Object.keys(MenuItems).map((category) => (
          <h2
            key={category}
            className={`text-xl md:text-2xl font-bold capitalize cursor-pointer px-4 py-2 ${
              activeCategory === category
                ? 'text-customGreen border-b-2 border-customGreen'
                : ''
            }`}
            onClick={() => handleToggleCategory(category)}
          >
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
        ))}
      </div>
      {MenuItems &&
        Object.keys(MenuItems).map((category) =>
          activeCategory === category ? (
            <div key={category} className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {MenuItems[category].map((item, index) => (
                  <div key={index} className="flex">
                    {item.image ? (
                      <div className="w-1/3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={500}
                          height={500}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    ) : (
                      <div className="w-1/3">
                        <Image
                          src="/images/placeholder.png"
                          alt={item.name}
                          width={500}
                          height={500}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                    <div className="w-2/3 pl-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="text-xl font-bold text-customGreen">
                          {item.price}
                        </div>
                        <OnlineOrder item={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null,
        )}
    </div>
  );
};

export default Menu;
