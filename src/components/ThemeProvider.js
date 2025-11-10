'use client';

import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('theme-marker99')) {
      root.classList.add('theme-marker99');
    }
  }, []);

  return children;
}

