// src/components/Header.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/MARKER-99-LOGO.png"
            alt="Marker 99 Logo"
            width={50}
            height={50}
            className="mr-3"
          />
          <span className="text-lg font-bold">
            Marker 99, Restaurant &amp; Lounge
          </span>
        </Link>
        <nav className="space-x-4">
          <Link href="#reserve" className="hover:text-gray-300">
            RESERVATIONS
          </Link>
          <Link href="#events" className="hover:text-gray-300">
            EVENTS
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            CONTACT MARKER 99
          </Link>
        </nav>
        <div className="space-x-2">
          <Link
            href="https://www.instagram.com/marker99_restaurantlounge/"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://marker99restaurant.com/wp-content/uploads/2022/08/solid-instagram-purple-white-icon-2.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://www.facebook.com/marker99restaurant"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://marker99restaurant.com/wp-content/uploads/2022/08/solid-facebook-blue-white-f-2.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
