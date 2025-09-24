import type { NextConfig } from 'next';

import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'media.licdn.com' },
      { hostname: 'cdn.magicui.design' },
      { hostname: 'focusbrew.vercel.app' },
      { hostname: 'www.retroui.dev' },
      { hostname: 'guarahooks.com' },
      { hostname: 'opengraph.githubassets.com' },
    ],
  },
};

export default withMDX(nextConfig);
