import { useEffect, useState } from 'react';

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
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
