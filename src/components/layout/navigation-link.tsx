'use client';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function NavigationLink({ href, children }: NavigationLinkProps) {
  const targetId = href.startsWith('#') ? href.substring(1) : href;

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 96;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element with id "${targetId}" not found`);
    }
  }

  return (
    <Button
      variant="link"
      className={cn('lg:justify-start lg:text-xl')}
      size="sm"
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
