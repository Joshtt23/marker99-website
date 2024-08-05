import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

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
              >
                <Image
                  src="https://marker99restaurant.com/wp-content/uploads/2022/08/solid-facebook-blue-white-f-2.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="hover:opacity-75"
                />
              </Link>
              <Link
                href="https://www.instagram.com/marker99_restaurantlounge/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://marker99restaurant.com/wp-content/uploads/2022/08/solid-instagram-purple-white-icon-2.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="hover:opacity-75"
                />
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
        <nav className="lg:hidden bg-customDark text-white p-4">
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
          <div className="flex space-x-4 mt-4">
            <Link
              href="https://www.facebook.com/marker99restaurant"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://marker99restaurant.com/wp-content/uploads/2022/08/solid-facebook-blue-white-f-2.png"
                alt="Facebook"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </Link>
            <Link
              href="https://www.instagram.com/marker99_restaurantlounge/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://marker99restaurant.com/wp-content/uploads/2022/08/solid-instagram-purple-white-icon-2.png"
                alt="Instagram"
                width={32}
                height={32}
                className="hover:opacity-75"
              />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
