import { IconMoon, IconSun } from '@tabler/icons-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEME } from '@/constants';
import type { Theme, ThemeToggleProps } from '@/types';

/**
 * Theme toggle component for switching between light, dark, and system themes.
 * Persists theme preference and updates document classes accordingly.
 * Supports light mode, dark mode, and system preference.
 *
 * @param className - Optional CSS classes for the button
 * @param variant - Button style variant (default: 'secondary')
 * @returns A dropdown menu for theme selection
 */
export function ThemeToggle({ className = '', variant = 'secondary' }: ThemeToggleProps) {
  const [theme, setThemeState] = React.useState<Theme>(THEME.default);

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : THEME.default);
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size="icon" className={className}>
          <IconSun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <IconMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState('theme-light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
