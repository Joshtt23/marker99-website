'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

const sections = ['home', 'about', 'menu', 'events', 'reserve', 'contact'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = sections[0];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetBottom = offsetTop + el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const getNavClass = (id) =>
    `relative transition-colors duration-200 ${
      activeSection === id
        ? 'text-customGreen after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-customGreen'
        : 'text-foreground/70 hover:text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        <Link href="/" className="flex items-center gap-3" aria-label="Marker 99 home">
          <Image
            src="/copyright/MARKER-99-LOGO.png"
            alt="Marker 99 Logo"
            width={56}
            height={56}
            className="h-14 w-14"
            priority
          />
          <span className="hidden sm:block text-sm font-semibold tracking-[0.3em] uppercase text-foreground">
            Marker 99
          </span>
        </Link>
        {isMounted && (
          <>
            <nav
              className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.2em]"
              aria-label="Primary navigation"
            >
              <Link href="#home" className={getNavClass('home')}>
                Home
              </Link>
              <Link href="#about" className={getNavClass('about')}>
                About
              </Link>
              <Link href="#menu" className={getNavClass('menu')}>
                Menu
              </Link>
              <Link href="#events" className={getNavClass('events')}>
                Events
              </Link>
              <Link href="#reserve" className={getNavClass('reserve')}>
                Reserve
              </Link>
              <Link href="#contact" className={getNavClass('contact')}>
                Contact
              </Link>
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:3212531369"
                className="text-sm font-semibold text-foreground/70 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
              >
                (321) 253-1369
              </a>
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-full bg-customGreen px-6 py-2 text-sm font-semibold text-brand-primary-foreground shadow-sm transition hover:bg-customGreen/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen active:scale-95"
              >
                Book a Table
              </a>
            </div>
          </>
        )}
        <div className="lg:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? (
              <XIcon className="h-8 w-8 text-foreground" />
            ) : (
              <MenuIcon className="h-8 w-8 text-foreground" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden bg-background text-foreground p-6 text-center space-y-2 border-t border-foreground/10"
          aria-label="Mobile navigation"
        >
          <Link
            href="#home"
            className="block py-3 rounded-lg hover:bg-white/5 transition-colors"
            onClick={handleNavClick}
          >
            HOME
          </Link>
          <Link
            href="#about"
            className="block py-3 rounded-lg hover:bg-white/5 transition-colors"
            onClick={handleNavClick}
          >
            ABOUT
          </Link>
          <Link
            href="#reserve"
            className="block py-3 rounded-lg hover:bg-white/5 transition-colors"
            onClick={handleNavClick}
          >
            RESERVATIONS
          </Link>
          <Link
            href="#events"
            className="block py-3 rounded-lg hover:bg-white/5 transition-colors"
            onClick={handleNavClick}
          >
            EVENTS
          </Link>
          <Link
            href="#menu"
            className="block py-3 rounded-lg hover:bg-white/5 transition-colors"
            onClick={handleNavClick}
          >
            MENU
          </Link>
          <Link
            href="#contact"
            className="block py-3 rounded-lg hover:bg-white/5 transition-colors"
            onClick={handleNavClick}
          >
            CONTACT
          </Link>
          <div className="pt-4 space-y-3 text-foreground/70">
            <a href="tel:3212531369" className="block text-sm font-semibold">
              (321) 253-1369
            </a>
            <a
              href="#reserve"
              className="inline-flex items-center justify-center rounded-full bg-customGreen px-6 py-2 text-sm font-semibold text-brand-primary-foreground shadow-sm transition hover:bg-customGreen/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customGreen active:scale-95"
            >
              Book a Table
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
