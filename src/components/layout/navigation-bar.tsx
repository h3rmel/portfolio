import { List } from 'lucide-react';

import { cn } from '@/lib/utils';

import { DATA } from '@/constants/data';

import { Button } from '../ui/button';
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
          'flex items-center justify-center',
          'w-full h-full max-w-screen-md mx-auto',
        )}
      >
        <ul className={cn('hidden lg:flex items-center justify-center gap-2')}>
          {DATA.navbar.links.map((link) => (
            <NavigationLink key={link.href} href={link.href}>
              {link.label}
            </NavigationLink>
          ))}
        </ul>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className={cn('absolute right-4 z-50', 'bg-indigo-500 text-white', 'rounded-full')}
            >
              <List className={cn('size-4 z-50')} />
            </Button>
          </DrawerTrigger>
          <DrawerContent className='px-4 pb-4'>
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
