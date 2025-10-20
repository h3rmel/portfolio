import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Icons } from './icons';

type Locale = 'en' | 'pt';

export function LocaleToggle({ className = '' }: { className?: string }) {
  const [currentLocale, setCurrentLocale] = React.useState<Locale>('en');

  React.useEffect(() => {
    const path = window.location.pathname;
    const locale = path.startsWith('/pt') ? 'pt' : 'en';
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
        <Button variant="outline" size="icon" className={className}>
          <Icons.Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
