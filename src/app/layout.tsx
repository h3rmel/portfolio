import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { firaCode } from '@/assets/fonts';

import '@/assets/globals.css';

import { Header } from '@/components/layout/header';
import { ClickSpark } from '@/components/reactbits/click-spark';
import { ThemeProvider } from '@/components/theme/theme-provider';

import { DATA } from '@/config/data';

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: DATA.keywords,
  authors: [{ name: DATA.name, url: DATA.url }],
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    type: 'profile',
    images: [{ url: DATA.ogImage, width: 1200, height: 628, alt: DATA.name }],
  },
  metadataBase: new URL(DATA.url),
  creator: DATA.creator,
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: 'summary_large_image',
    creator: `@isaac${DATA.creator}`,
    title: DATA.name,
    description: DATA.description,
    images: [DATA.ogImage],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'relative w-full min-h-dvh font-sans antialiased scroll-smooth',
          firaCode.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ClickSpark>
            <Header />
            {children}
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
