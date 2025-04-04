import { useState, useEffect } from 'react';

export const useScrollDirection = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return isScrollingDown;
};

export const getAnimationVariants = (isScrollingDown, delay = 0) => ({
  hidden: {
    opacity: 0,
    y: isScrollingDown ? 20 : 0
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut"
    }
  }
}); 