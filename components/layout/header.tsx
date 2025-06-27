import { cn } from '@/lib/utils';

import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';

export function Header() {
  return (
    <header
      className={cn(
        'z-50 sticky top-0 left-0 right-0',
        'w-full h-16 max-w-screen-lg mx-auto',
        'bg-background/75 backdrop-blur-sm',
        'border border-t-0 border-x-0 lg:border-x lg:rounded-b-lg',
      )}
    >
      <nav className={cn('flex items-center justify-between', 'size-full px-4')}>
        <DesktopNavigation />
        <MobileNavigation />
      </nav>
    </header>
  );
}
