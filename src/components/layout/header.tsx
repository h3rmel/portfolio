'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { Icons } from '@/components/icons';
import { NavigationLink } from '@/components/layout/navigation-link';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';
import { useMedia } from '@/hooks/use-media';

export function Header() {
  const { contact } = DATA.sessions;

  const isDesktop = useMedia('(min-width: 1024px)', true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50',
        'w-full h-16',
        'border-b',
        'bg-background/40 backdrop-blur-md',
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-between lg:justify-end px-4 lg:px-0',
          'w-full h-full max-w-screen-sm lg:mx-auto',
        )}
      >
        <Drawer
          direction={isDesktop ? 'top' : 'bottom'}
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        >
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setIsDrawerOpen(true)}>
              <Icons.Menu className="size-5 -scale-x-100" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="px-4 pb-4 lg:max-w-screen-lg lg:border-x lg:mx-auto">
            <DrawerHeader>
              <DrawerTitle>{DATA.navbar.title}</DrawerTitle>
              <DrawerDescription>{DATA.navbar.description}</DrawerDescription>
            </DrawerHeader>
            <ul className={cn('flex flex-col gap-2')}>
              {DATA.navbar.links.map((link) => (
                <NavigationLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsDrawerOpen(false)}
                >
                  {link.label}
                </NavigationLink>
              ))}
            </ul>
          </DrawerContent>
        </Drawer>
        <div className={cn('hidden lg:flex items-center gap-2', 'border-r ml-auto pr-4')}>
          <Link
            href={contact.links.linkedin}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'hidden lg:inline-flex',
            )}
            target="_blank"
          >
            <Icons.Linkedin className={cn('size-4')} />
          </Link>
          <Link
            href={contact.links.email}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'hidden lg:inline-flex',
            )}
            target="_blank"
          >
            <Icons.Mail className={cn('size-4')} />
          </Link>
          <Link
            href={contact.links.twitter}
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}
            target="_blank"
          >
            <Icons.Twitter className={cn('size-4 fill-current')} />
          </Link>
          <Link
            href={contact.links.github}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'hidden lg:inline-flex',
            )}
            target="_blank"
          >
            <Icons.Github className={cn('size-4')} />
          </Link>
        </div>
        <ThemeToggle variant="ghost" className="ml-4" />
      </nav>
    </header>
  );
}
