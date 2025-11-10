'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageCarousel from './ImageCarousel';
import OnlineOrder from './OnlineOrder';
import MenuItems from './data/MenuItems';

const Menu = ({ onlineOrder }) => {
  const categories = Object.keys(MenuItems);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="scroll-mt-8 md:scroll-mt-16">
      <div className="bg-background py-20 md:py-24 text-foreground" aria-label="Signature dishes">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-customGreen">
              Taste the favorites
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Signature dishes from the kitchen
            </h2>
            <p className="text-lg text-foreground/75">
              A rotating selection of guest favorites, crafted by our chefs to
              showcase the best of Marker 99.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-6 md:p-8 shadow-[0_25px_45px_-20px_rgba(0,0,0,0.6)]">
            <ImageCarousel />
          </div>
        </div>
      </div>
      <div id="menu" className="bg-surface-alt py-20 md:py-24 text-foreground">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-foreground/10 bg-black/20 backdrop-blur p-10 md:p-14 shadow-[0_25px_45px_-20px_rgba(0,0,0,0.6)]">
            <h2
              id="menu-heading"
              className="text-3xl md:text-4xl font-semibold text-center mb-8"
            >
              Explore the Marker 99 Menu
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              <div
                className="flex md:flex-wrap md:justify-center gap-3 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory"
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
                      className={`snap-start shrink-0 text-base md:text-xl font-semibold capitalize px-4 py-2 rounded-full border transition-colors ${
                        isActive
                          ? 'border-customGreen text-customGreen bg-black/10'
                          : 'border-foreground/15 text-foreground/60 hover:text-foreground'
                      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen`}
                    >
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-12">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <div
                    key={category}
                    role="tabpanel"
                    id={`${category}-panel`}
                    aria-labelledby={`${category}-tab`}
                    aria-hidden={!isActive}
                    className={isActive ? 'block' : 'hidden'}
                  >
                    <header className="flex items-baseline justify-between mb-6">
                      <h3 className="text-2xl font-semibold capitalize text-foreground">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <span className="hidden md:inline text-sm uppercase tracking-widest text-customGreen">
                        {MenuItems[category].length} items
                      </span>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {MenuItems[category].map((item, index) => (
                        <div
                          key={index}
                          className="flex bg-black/20 border border-foreground/10 rounded-2xl overflow-hidden backdrop-blur"
                        >
                          {item.image !== '' ? (
                            <div className="w-1/3">
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 45vw, 220px"
                              />
                            </div>
                          ) : null}
                          <div className="w-full md:w-2/3 p-5 flex flex-col justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">
                                {item.name}
                              </h4>
                              <p className="text-foreground/70 text-sm md:text-base">
                                {item.description}
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-3">
                              <div className="text-lg font-bold text-customGreen">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
