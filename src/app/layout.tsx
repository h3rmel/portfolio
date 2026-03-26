import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactElement } from 'react';

import { GridPattern } from '@/components/ui/grid-pattern';
import { siteConfig } from '@/config/site';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const socialImageAlt = `${siteConfig.name} — ${siteConfig.title}`;

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: socialImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: '/twitter-image',
        width: 1200,
        height: 630,
        alt: socialImageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <html lang='en' className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className='relative min-h-screen w-full bg-background text-foreground antialiased'>
        <GridPattern
          width={100}
          height={100}
          x={0}
          y={0}
          strokeDasharray={'4 2'}
          className='mask-[radial-gradient(1500px_circle_at_center,white,transparent)]'
        />
        <main className='relative z-10 max-w-6xl w-full mx-auto'>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
