import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';

/**
 * Sitemap with the home route; expand when new pages are added.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
