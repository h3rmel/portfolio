import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { firaCode } from '@/assets/fonts';

import '@/assets/globals.css';

import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/theme/theme-provider';

import { DATA } from '@/config/data';

export const metadata: Metadata = {
  title: {
    default: DATA.name.replace('Reginato', ''),
    template: `%s | ${DATA.name.replace('Reginato', '')}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: 'pt-BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '',
    yandex: '',
  },
  creator: DATA.creator,
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'relative min-h-dvh w-full overflow-x-hidden scroll-smooth font-sans antialiased',
          firaCode.className,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
