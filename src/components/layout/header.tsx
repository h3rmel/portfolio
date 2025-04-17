'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import { Github, Linkedin, List, Mail, Origami } from 'lucide-react';

import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';
import { useMedia } from '@/hooks/use-media';

import { Icons } from '../icons';
import { Button, buttonVariants } from '../ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { NavigationLink } from './navigation-link';

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
          'flex items-center justify-end lg:justify-between px-4 lg:px-0',
          'w-full h-full max-w-screen-sm lg:mx-auto',
        )}
      >
        <div className={cn('hidden lg:flex items-center gap-2')}>
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
        <Drawer
          direction={isDesktop ? 'top' : 'bottom'}
          open={isDrawerOpen}
          onOpenChange={setIsDrawerOpen}
        >
          <DrawerTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setIsDrawerOpen(true)}>
              <Icons.Menu className="size-5" />
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
      </nav>
    </header>
  );
}
