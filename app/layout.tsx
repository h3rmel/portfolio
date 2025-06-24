import type { Metadata, Viewport } from 'next';

import '@/assets/globals.css';

import { RootProvider } from 'fumadocs-ui/provider';

import { ThemeProvider } from '@/components/theme-provider';

import { cn } from '@/lib/utils';

import { firaCode } from '@/assets/fonts';

import { siteConfig } from '@/config/site';

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: 'h3rmel', url: siteConfig.authorUrl }],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    siteName: siteConfig.name,
    url: siteConfig.url,
  },
  metadataBase: new URL(siteConfig.url),
  creator: 'h3rmel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative size-full min-h-dvh font-sans antialiased scroll-smooth overflow-x-hidden flex flex-col',
          firaCode.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <RootProvider>{children}</RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
