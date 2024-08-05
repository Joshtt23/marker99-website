'use client';

import React, { useEffect } from 'react';

function Menu() {
  useEffect(() => {
    // Load the Elfsight script
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="elfsight-app-71df41cf-4856-46d9-b3b9-ff6a3acd69f1"></div>
  );
}

export default Menu;
