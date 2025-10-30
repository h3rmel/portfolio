import { useState } from 'react';
import { getRelativeLocaleUrl } from 'astro:i18n';
import { IconMenu2 } from '@tabler/icons-react';
import { CV_URL } from '@/config/links';
import { getValidLocale } from '@/i18n/utils';
import { cn } from '@/lib/utils';
import type { NavigationBarProps } from '@/types';
import { LocaleToggle } from '../locale-toggle';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';
import { Button, buttonVariants } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { Separator } from '../ui/separator';

/**
 * Main navigation bar component with responsive design.
 * Desktop: Displays horizontal navigation with links and toggles.
 * Mobile: Uses a drawer with hamburger menu trigger.
 *
 * @param currentLocale - The current locale for i18n routing
 * @param navigationLinks - Array of navigation links with href and label
 * @param currentPath - The current URL pathname to determine active link
 */
export function NavigationBar({
  currentLocale,
  navigationLinks,
  currentPath,
}: NavigationBarProps) {
  const [open, setOpen] = useState(false);

  /**
   * Checks if a link is currently active by comparing its href with the current path.
   * @param href - The link's href to compare
   * @returns true if the link matches the current path
   */
  const isActive = (href: string): boolean => {
    return currentPath === href;
  };

  const validLocale = getValidLocale(currentLocale);

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-border bg-background/50 relative mx-auto flex max-w-screen-lg items-center justify-between border border-b-3 p-3 backdrop-blur-xs lg:rounded-b-lg">
        {/* Logo */}
        <a href={getRelativeLocaleUrl(validLocale)} className="ml-1">
          <span className="text-2xl tracking-wider">I</span>
          <span className="-ml-1.5 text-2xl tracking-wider">H</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-4 md:flex">
          {navigationLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={cn(
                buttonVariants({ variant: 'link', size: 'sm' }),
                isActive(link.href) && 'font-semibold underline underline-offset-4',
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CV_URL[validLocale]}
            target="_blank"
            className={cn(buttonVariants({ variant: 'link', size: 'sm' }))}
          >
            CV
          </a>
        </div>

        {/* Desktop Locale and Theme Toggle */}
        <div className="hidden items-center space-x-4 md:flex">
          <LocaleToggle variant="outline" />
          <AnimatedThemeToggler variant="outline" size="icon" />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" size="icon">
                <IconMenu2 className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col space-y-1 p-4">
                {navigationLinks.map((link) => (
                  <DrawerClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'lg' }),
                        'justify-start',
                        isActive(link.href) && 'bg-accent/60 font-semibold',
                      )}
                    >
                      {link.label}
                    </a>
                  </DrawerClose>
                ))}
                <Separator className="my-2" />
                <DrawerClose asChild>
                  <a
                    href={CV_URL[validLocale]}
                    target="_blank"
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'lg' }),
                      'justify-start',
                    )}
                  >
                    CV
                  </a>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
