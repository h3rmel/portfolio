'use client';

import { useState } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navigationLinks } from '@/config/navigation';

import { Logo } from '../logo';
import { Button, buttonVariants } from '../ui/button';
import { Icons, renderIcon } from '../ui/icons';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { NavigationLink } from './navigation-link';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Logo />
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Open navigation">
            <Icons.Menu className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={cn(
            'z-50',
            'bg-background/75 backdrop-blur-sm',
            'w-screen h-full',
            'rounded-none border-0 border-b',
            'flex flex-col space-y-4',
          )}
        >
          <Link
            href="/"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')}
          >
            <Icons.ChevronLeft className="size-4" />
            Back
          </Link>
          <hr />
          <ul className="flex flex-col space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <NavigationLink
                  href={link.href}
                  label={link.label}
                  icon={renderIcon(link.icon)}
                  variant="outline"
                  size="lg"
                  className="w-full"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
