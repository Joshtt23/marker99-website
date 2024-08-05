import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTripadvisor,
  FaYelp,
} from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-customDark text-white py-4 shadow-customGreenGlow z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/copyright/MARKER-99-LOGO.png"
            alt="Marker 99 Logo"
            width={80}
            height={80}
            className="mr-3"
            priority
          />
        </Link>
        {isMounted && (
          <>
            <nav className="hidden lg:flex space-x-6 text-lg">
              <Link href="#home" className="hover:text-green-500">
                HOME
              </Link>
              <Link href="#about" className="hover:text-green-500">
                ABOUT
              </Link>
              <Link href="#reserve" className="hover:text-green-500">
                RESERVATIONS
              </Link>
              <Link href="#events" className="hover:text-green-500">
                EVENTS
              </Link>
              <Link href="#menu" className="hover:text-green-500">
                MENU
              </Link>
              <Link href="#contact" className="hover:text-green-500">
                CONTACT
              </Link>
            </nav>
            <div className="hidden lg:flex space-x-4">
              <Link
                href="https://www.facebook.com/marker99restaurant"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:opacity-75"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                href="https://www.instagram.com/marker99_restaurantlounge/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:opacity-75"
              >
                <FaInstagram size={30} />
              </Link>
              <Link
                href="https://g.page/marker99restaurant?share"
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:opacity-75"
              >
                <FaGoogle size={30} />
              </Link>
              <Link
                href="tel:3212531369"
                passHref
                className="text-3xl hover:opacity-75"
              >
                <FaPhone size={30} />
              </Link>
            </div>
          </>
        )}
        <div className="lg:hidden flex items-center">
          <button onClick={handleMenuToggle} className="focus:outline-none">
            {isMenuOpen ? (
              <XIcon className="h-8 w-8 text-white" />
            ) : (
              <MenuIcon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="lg:hidden bg-customDark text-white p-4 text-center">
          <Link href="#home" className="block py-2 hover:text-green-500">
            HOME
          </Link>
          <Link href="#reserve" className="block py-2 hover:text-green-500">
            RESERVATIONS
          </Link>
          <Link href="#events" className="block py-2 hover:text-green-500">
            EVENTS
          </Link>
          <Link href="#contact" className="block py-2 hover:text-green-500">
            CONTACT MARKER 99
          </Link>
          <div className="flex justify-center space-x-4 mt-4 items-center">
            <Link
              href="https://www.facebook.com/marker99restaurant"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:opacity-75"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href="https://www.instagram.com/marker99_restaurantlounge/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:opacity-75"
            >
              <FaInstagram size={30} />
            </Link>
            <Link
              href="https://www.yelp.com/biz/marker-99-restaurant-and-lounge-melbourne"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:opacity-75"
            >
              <FaYelp size={30} />
            </Link>
            <Link
              href="https://www.tripadvisor.com/Restaurant_Review-g34433-d15521460-Reviews-Marker_99_Restaurant_Lounge-Melbourne_Brevard_County_Florida.html"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:opacity-75"
            >
              <FaTripadvisor size={30} />
            </Link>
            <Link
              href="https://g.page/marker99restaurant?share"
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:opacity-75"
            >
              <FaGoogle size={30} />
            </Link>
            <Link
              href="tel:3212531369"
              passHref
              className="text-3xl hover:opacity-75"
            >
              <FaPhone size={30} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
