import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navigationLinks } from '@/config/navigation';

import { Logo } from '../logo';
import { buttonVariants } from '../ui/button';
import { Icons, renderIcon } from '../ui/icons';
import { NavigationLink } from './navigation-link';

export function DesktopNavigation() {
  return (
    <>
      <span className={cn('hidden lg:inline-flex items-center space-x-4')}>
        <Link href="/" className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
          <Icons.ChevronLeft className="size-4" />
        </Link>
        <Logo />
      </span>
      <ul className={cn('hidden lg:flex items-center space-x-1')}>
        {navigationLinks.map((link) => (
          <li key={link.label}>
            <NavigationLink
              href={link.href}
              label={link.label}
              icon={renderIcon(link.icon)}
              variant="ghost"
              size="sm"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
