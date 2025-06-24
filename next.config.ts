import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: 'media.licdn.com' },
      { hostname: 'cdn.magicui.design' },
      { hostname: 'focusbrew.vercel.app' },
      { hostname: 'www.retroui.dev' },
      { hostname: 'guarahooks.com' },
    ],
  },
};

export default nextConfig;
