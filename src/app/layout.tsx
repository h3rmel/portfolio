// #region Imports

import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { LanguageProvider } from '@/ui/components/language';
import { Navbar } from '@/ui/components/layout';
import { ThemeProvider } from '@/ui/components/theme/theme-provider';
import { Toaster } from '@/ui/components/ui/toaster';
import { ibm_plex_mono } from '@/ui/fonts';
import '@/ui/globals.css';

// #endregion

export const metadata: Metadata = {
  title: `Isaac "Hermel" Reginato`,
};

interface RootLayoutProps {
  children: ReactNode;
}

/**
 * Renders the root layout component.
 *
 * The RootLayout is the main layout of the application.
 * Is required and must contain `html` and `body` tags.
 *
 * @component
 * @param children -
 * @returns {JSX.Element} The root layout component.
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={ibm_plex_mono.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
