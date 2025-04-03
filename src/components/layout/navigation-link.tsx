'use client';

import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavigationLink({ href, children }: NavigationLinkProps) {
  const [isActive, setIsActive] = useState(false);
  const targetId = href.startsWith('#') ? href.substring(1) : href;

  useEffect(() => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      {
        root: null,
        rootMargin: '-48px 0px 0px 0px', // Offset to match our scroll position
        threshold: 0.5, // Consider visible when 50% of the element is in view
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [targetId]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 96;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  }

  return (
    <Button 
      variant="ghost" 
      className={cn(
        "cursor-pointer",
        "border",
        isActive && "lg:bg-muted/30"
      )} 
      size="sm" 
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
