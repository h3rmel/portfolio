import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navigationLinks } from '@/config/navigation';

import { buttonVariants } from '../ui/button';
import { Icons, renderIcon } from '../ui/icons';
import { NavigationLink } from './navigation-link';

export function Header() {
  return (
    <header
      className={cn('z-50 sticky top-0 lg:top-4 left-0 right-0', 'w-full h-16 lg:h-auto max-w-screen-lg mx-auto')}
    >
      <nav
        className={cn(
          'w-full h-full',
          'flex items-center justify-between',
          'bg-background/50 backdrop-blur-xs',
          'border-b lg:border lg:rounded-md p-2',
        )}
      >
        {/* Back Button */}
        <Link href="/" className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}>
          <Icons.ChevronLeft />
          Back
        </Link>
        {/* Navigation Links */}
        <ul className="flex items-center space-x-1">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <NavigationLink
                href={link.href}
                label={link.label}
                icon={renderIcon(link.icon)}
              />
            </li>
          ))}
        </ul>
        {/* Locale settings */}
      </nav>
    </header>
  );
}
