'use client';

import { useEffect, useState } from 'react';

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(() => {
    if (typeof window === 'undefined') {
      return {
        windowWidth: 0,
        windowHeight: 0,
      };
    }
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
