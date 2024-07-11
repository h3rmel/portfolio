// #region Imports

import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { LanguageProvider } from '@/ui/components/language';
import { Navbar } from '@/ui/components/layout';
import { ThemeProvider } from '@/ui/components/theme/theme-provider';
import { ibm_plex_mono } from '@/ui/fonts';
import '@/ui/globals.css';

// #endregion

export const metadata: Metadata = {
  title: `Isaac "Hermel" Reginato`,
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={ibm_plex_mono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
