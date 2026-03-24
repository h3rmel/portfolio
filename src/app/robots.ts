import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

/**
 * Robots.txt for crawlers; sitemap points at production origin.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', siteConfig.url).toString(),
  };
}
