import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { firaCode } from '@/assets/fonts';

import '@/assets/globals.css';

import { NavigationBar } from '@/components/layout/navigation-bar';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { BackgroundBeams } from '@/components/ui/background-beams';

import { DATA } from '@/config/data';

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
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
          <NavigationBar />
          {children}
          <BackgroundBeams />
        </ThemeProvider>
      </body>
    </html>
  );
}
