'use client';

// #region Imports

import * as React from 'react';

import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';

import { Button, ButtonProps } from '@/ui/components/ui/button';

// #endregion

interface ThemeToggleProps extends ButtonProps {}

/**
 * Renders the ThemeToggle component.
 *
 * @component
 * @param props - The props of the ThemeToggle component.
 * @returns {JSX.Element} The ThemeToggle component.
 */
export function ThemeToggle({ ...props }: ThemeToggleProps): JSX.Element {
  const { theme, setTheme } = useTheme();

  /**
   * Handles the theme change.
   *
   * `light` <-> `dark`
   */
  function handleThemeChange() {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  }

  return (
    <Button variant="outline" size="icon" onClick={handleThemeChange} {...props}>
      {theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">toggle theme</span>
    </Button>
  );
}
