'use client';
import React, { useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleReviewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apps.elfsight.com/p/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div className={`relative p-4 rounded-lg shadow-lg`}>
        <div className="elfsight-app-3ba12484-85df-41ec-91ed-c4d289201061"></div>
      </div>
    </div>
  );
};

export default GoogleReviewWidget;
