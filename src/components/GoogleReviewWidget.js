'use client';
import React, { useEffect, useState } from 'react';

const GoogleReviewWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Load the external script only once on mount.
  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://apps.elfsight.com/p/platform.js"]',
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://apps.elfsight.com/p/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      className="fixed bottom-4 left-4 z-40 transition-transform duration-300"
      // When open, the panel is fully visible; when closed, it slides left so that only a 40px tab shows.
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(calc(-100% + 40px))',
      }}
    >
      <div className="relative w-80 h-64 bg-white shadow-lg rounded-r-lg overflow-hidden">
        {/* 
          The reviews are always rendered so they stay loaded.
          We add left padding to avoid being hidden behind the collapse button.
        */}
        <div className="p-4 h-full overflow-y-auto pl-16">
          <div className="elfsight-app-3ba12484-85df-41ec-91ed-c4d289201061"></div>
        </div>

        {isOpen && (
          // Collapse Button – placed along the left edge inside the widget
          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black border-2 border-white rounded-full p-3 shadow-xl focus:outline-none z-50"
            aria-label="Collapse reviews widget"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Left-pointing arrow */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {!isOpen && (
          // Expand Button – fills the visible 40px tab when collapsed
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-0 right-0 h-full w-75 flex flex-col items-center justify-center bg-blue-600 text-white border-2 border-white rounded-r-lg shadow-xl hover:bg-blue-700 focus:outline-none z-50"
            aria-label="Expand reviews widget"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 mb-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Right-pointing arrow */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-xs font-bold transform rotate-90 mt-3">
              Reviews
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default GoogleReviewWidget;
