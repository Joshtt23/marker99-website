'use client';

import React, { useEffect } from 'react';

export default function AxeDevtools() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    let isCancelled = false;

    async function enableAxe() {
      const ReactDOMModule = await import('react-dom');
      const ReactDOM = ReactDOMModule.default ?? ReactDOMModule;
      const { default: axe } = await import('@axe-core/react');

      if (isCancelled) {
        return;
      }

      axe(React, ReactDOM, 1000);
    }

    enableAxe();

    return () => {
      isCancelled = true;
    };
  }, []);

  return null;
}
