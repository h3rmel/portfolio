import { ImageResponse } from 'next/og';

import { OgImageShared } from '@/app/_og/og-image-shared';
import { siteConfig } from '@/config/site';

export const runtime = 'edge';

export const alt = `${siteConfig.name} — ${siteConfig.title}`;

export const size = {
  width: 1200,
  height: 630,
} as const;

export const contentType = 'image/png';

/**
 * Default Open Graph image for social previews (LinkedIn, Slack, etc.).
 */
export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(<OgImageShared />, {
    ...size,
  });
}
