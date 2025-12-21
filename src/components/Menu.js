'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import ImageCarousel from './ImageCarousel';
import OnlineOrder from './OnlineOrder';
import cocktailsMenu from '../data/menu-cocktails.json';
import lunchDinnerMenu from '../data/menu-lunch-dinner.json';

const MENU_CONFIG = {
  cocktails: cocktailsMenu,
  main: lunchDinnerMenu,
};

const MENU_OPTIONS = [
  {
    id: 'cocktails',
    label: cocktailsMenu.label,
    availability: cocktailsMenu.availability,
  },
  {
    id: 'main',
    label: lunchDinnerMenu.label,
    availability: lunchDinnerMenu.availability,
  },
];

const Menu = ({ onlineOrder }) => {
  const [activeMenuId, setActiveMenuId] = useState('cocktails');
  const [activeCategoryId, setActiveCategoryId] = useState(
    MENU_CONFIG.cocktails.sections[0]?.id ?? '',
  );

  useEffect(() => {
    const firstSection = MENU_CONFIG[activeMenuId].sections[0];
    setActiveCategoryId(firstSection?.id ?? '');
  }, [activeMenuId]);

  const activeMenu = MENU_CONFIG[activeMenuId];
  const sections = activeMenu.sections;

  return (
    <section className="scroll-mt-8 md:scroll-mt-16">
      <div
        className="bg-background py-20 md:py-24 text-foreground"
        aria-label="Signature dishes"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="uppercase tracking-[0.3em] text-sm text-customGreen">
              Waterfront dining
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Experience Marker 99 on the Indian River
            </h2>
            <p className="text-lg text-foreground/75">
              Dine on our expansive waterfront deck overlooking the Indian
              River, where panoramic views meet exceptional cuisine. From our
              outdoor dining spaces to the extended pier, Marker 99 offers a
              unique waterfront experience in Melbourne, Florida.
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
              className="text-3xl md:md:text-4xl font-semibold text-center mb-8"
            >
              Explore the Marker 99 Menu
            </h2>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {MENU_OPTIONS.map(({ id, label }) => {
                const isActive = id === activeMenuId;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveMenuId(id)}
                    className={`inline-flex items-center justify-center rounded-full border px-6 py-2 text-sm font-semibold transition ${
                      isActive
                        ? 'border-customGreen bg-customGreen/10 text-customGreen'
                        : 'border-foreground/20 text-foreground/70 hover:text-foreground'
                    } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="text-center space-y-2 mb-10">
              <p className="text-sm uppercase tracking-[0.3em] text-customGreen">
                {activeMenu.label}
              </p>
              {activeMenu.availability ? (
                <p className="text-base text-foreground/80">
                  {activeMenu.availability}
                </p>
              ) : null}
              {activeMenu.note ? (
                <p className="text-sm text-customGreen/80">{activeMenu.note}</p>
              ) : null}
            </div>

            <div className="flex flex-col gap-4 mb-10">
              <div
                className="flex md:flex-wrap md:justify-center gap-3 overflow-x-auto no-scrollbar pb-2 snap-x snap-mandatory"
                role="tablist"
                aria-label={`${activeMenu.label} menu categories`}
              >
                {sections.map((section) => {
                  const isActive = activeCategoryId === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      role="tab"
                      id={`${section.id}-tab`}
                      aria-selected={isActive}
                      aria-controls={`${section.id}-panel`}
                      onClick={() => setActiveCategoryId(section.id)}
                      className={`snap-start shrink-0 text-base md:text-xl font-semibold capitalize px-4 py-2 rounded-full border transition-colors ${
                        isActive
                          ? 'border-customGreen text-customGreen bg-black/10'
                          : 'border-foreground/15 text-foreground/60 hover:text-foreground'
                      } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen`}
                    >
                      {section.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-12">
              {sections.map((section) => {
                const isActive = activeCategoryId === section.id;
                return (
                  <div
                    key={section.id}
                    role="tabpanel"
                    id={`${section.id}-panel`}
                    aria-labelledby={`${section.id}-tab`}
                    aria-hidden={!isActive}
                    className={isActive ? 'block' : 'hidden'}
                  >
                    <header className="flex items-baseline justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-foreground">
                          {section.title}
                        </h3>
                        {section.note && (
                          <p className="text-sm text-foreground/70 mt-2 italic">
                            {section.note}
                          </p>
                        )}
                      </div>
                      <span className="hidden md:inline text-sm uppercase tracking-widest text-customGreen">
                        {section.items.length} items
                      </span>
                    </header>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.items.map((item, index) => (
                        <div
                          key={`${section.id}-${index}`}
                          className="flex bg-black/20 border border-foreground/10 rounded-2xl overflow-hidden backdrop-blur"
                        >
                          {item.image ? (
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
                              {onlineOrder && activeMenuId === 'main' && item.image && (
                                <OnlineOrder item={item} />
                              )}
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
