'use client';

import Link from 'next/link';

import { Linkedin, List, Mail, Origami } from 'lucide-react';

import { cn } from '@/lib/utils';

import { DATA } from '@/constants/data';
import { useMedia } from '@/hooks/use-media';

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

export function NavigationBar() {
  const { contact } = DATA.sessions;

  const isDesktop = useMedia('(min-width: 1024px)');

  return (
    <header
      className={cn(
        'fixed lg:top-0 bottom-0 left-0 right-0 z-50',
        'w-full h-16',
        'lg:border-b',
        'lg:bg-background/30 lg:backdrop-blur-md',
      )}
    >
      <nav
        className={cn(
          'flex items-center justify-between relative',
          'w-full h-full max-w-screen-sm mx-auto',
        )}
      >
        <Origami size={32} className={cn('hidden lg:inline-flex')} />
        <div className={cn('flex items-center gap-2')}>
          <Link
            href={contact.links.linkedin}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'hidden lg:inline-flex',
            )}
            target="_blank"
          >
            <Linkedin className={cn('size-4')} />
          </Link>
          <Link
            href={contact.links.email}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon' }),
              'hidden lg:inline-flex',
            )}
            target="_blank"
          >
            <Mail className={cn('size-4')} />
          </Link>
        </div>
        <Drawer direction={isDesktop ? 'top' : 'bottom'}>
          <DrawerTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className={cn('absolute bottom-4 right-4 lg:bottom-0 lg:right-0 lg:relative z-50', 'rounded-full lg:rounded-md')}
            >
              <List className={cn('size-5 lg:size-4 z-50')} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="px-4 pb-4 lg:max-w-screen-lg lg:border-x lg:mx-auto">
            <DrawerHeader>
              <DrawerTitle>{DATA.navbar.title}</DrawerTitle>
              <DrawerDescription>{DATA.navbar.description}</DrawerDescription>
            </DrawerHeader>
            <ul className={cn('flex flex-col gap-2')}>
              {DATA.navbar.links.map((link) => (
                <NavigationLink key={link.href} href={link.href}>
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
