import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

export default nextConfig;
