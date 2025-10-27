import { getRelativeLocaleUrl } from 'astro:i18n';

import { cn } from '@/lib/utils';

import { LocaleToggle } from '../locale-toggle';
import { ThemeToggle } from '../theme-toggle';
import { buttonVariants } from '../ui/button';

export function NavigationBar({
  currentLocale,
  navigationLinks,
}: {
  currentLocale: string;
  navigationLinks: { href: string; label: string }[];
}) {
  return (
    <header className="sticky top-0 z-50">
      <nav className="max-w-screen-lg relative mx-auto flex justify-between items-center border border-border border-b-3 p-3 rounded-b-lg bg-background/50 backdrop-blur-xs">
        <a href={getRelativeLocaleUrl(currentLocale!, 'home')} className="ml-1">
          <span className="text-2xl tracking-wider">I</span>
          <span className="text-2xl tracking-wider -ml-1.5">H</span>
        </a>
        <div className="flex items-center space-x-3">
          {navigationLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className={cn(buttonVariants({ variant: 'link', size: 'sm' }))}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Locale and Theme Toggle */}
        <div className="flex items-center space-x-3">
          <LocaleToggle variant="outline" />
          <ThemeToggle variant="outline" />
        </div>
      </nav>
    </header>
  );
}
