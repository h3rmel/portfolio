// @ts-check

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://isaachermel.dev.br',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          pt: 'pt-BR',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          // Better code splitting for CSS
          manualChunks: undefined,
        },
      },
    },
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  // Performance optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
