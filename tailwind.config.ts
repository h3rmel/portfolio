/**
 * Tailwind CSS v4 Configuration
 * Optimized for production builds with minimal bundle size
 */

import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    // Prioritize UI components for faster scanning
    './src/components/ui/**/*.{tsx,ts}',
  ],
  theme: {
    extend: {
      // Custom size utilities for icons
      size: {
        icon: 'var(--icon-size-md)',
        'icon-sm': 'var(--icon-size-sm)',
        'icon-lg': 'var(--icon-size-lg)',
        'icon-xl': 'var(--icon-size-xl)',
      },
      // Custom animation durations
      transitionDuration: {
        fast: 'var(--duration-fast)',
        normal: 'var(--duration-normal)',
        slow: 'var(--duration-slow)',
      },
      // Custom transition timing functions
      transitionTimingFunction: {
        'ease-in': 'var(--ease-in)',
        'ease-out': 'var(--ease-out)',
        'ease-in-out': 'var(--ease-in-out)',
      },
    },
  },
} satisfies Config;
