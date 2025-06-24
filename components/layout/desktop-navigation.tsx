import Link from 'next/link';

import { cn } from '@/lib/utils';

import { navigationLinks } from '@/config/navigation';

import { buttonVariants } from '../ui/button';
import { Icons, renderIcon } from '../ui/icons';
import { NavigationLink } from './navigation-link';

export function DesktopNavigation() {
  return (
    <nav className={cn('size-full px-4', 'lg:flex items-center justify-between', 'hidden')}>
      <Link href="/" className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}>
        <Icons.ChevronLeft className="size-4" />
        Back
      </Link>
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
    </nav>
  );
}
