import * as React from 'react';
import { IconLanguage } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LOCALE } from '@/constants';
import type { Locale, LocaleToggleProps } from '@/types';

/**
 * Locale toggle component for switching between supported languages.
 * Detects current locale from URL and allows navigation between locales.
 * Supports English (en) and Portuguese (pt).
 *
 * @param className - Optional CSS classes for the button
 * @param variant - Button style variant (default: 'secondary')
 * @returns A dropdown menu for language selection
 */
export function LocaleToggle({
  className = '',
  variant = 'secondary',
}: LocaleToggleProps) {
  const [currentLocale, setCurrentLocale] = React.useState<Locale>(LOCALE.default);

  React.useEffect(() => {
    const path = window.location.pathname;
    const locale = path.startsWith('/pt') ? 'pt' : LOCALE.default;
    setCurrentLocale(locale);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const path = window.location.pathname;

    let newPath: string;
    if (path.startsWith('/en')) {
      newPath = path.replace(/^\/en/, `/${newLocale}`);
    } else if (path.startsWith('/pt')) {
      newPath = path.replace(/^\/pt/, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}/`;
    }

    // Navigate to the new path
    window.location.pathname = newPath;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size="icon" className={className}>
          <IconLanguage className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1" align="end">
        <DropdownMenuItem
          onClick={() => switchLocale('en')}
          className={currentLocale === 'en' ? 'bg-accent' : ''}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLocale('pt')}
          className={currentLocale === 'pt' ? 'bg-accent' : ''}
        >
          Português
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
