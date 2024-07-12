'use client';

// #region Imports

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

// #endregion

/**
 * Provides the theme for the application.
 *
 * @param children - The child components to be wrapped by the theme provider.
 * @param props - Additional props to be passed to the underlying `NextThemesProvider`.
 * @returns {JSX.Element} The rendered `NextThemesProvider` component.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps): JSX.Element {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
