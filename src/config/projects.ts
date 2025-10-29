import type { ProjectData } from '@/types';

/**
 * Static project data without translations.
 * Translations are stored in the i18n translations file.
 */
export const PROJECT_DATA: ProjectData[] = [
  {
    id: 'guarahooks',
    imageUrl: 'https://guarahooks.com/og.webp',
    url: 'https://guarahooks.com/',
    links: {
      source: 'https://github.com/h3rmel/guarahooks',
      website: 'https://guarahooks.com/',
    },
  },
  {
    id: 'magic-ui',
    videoUrl: 'https://cdn.magicui.design/bento-grid.mp4',
    url: 'https://magicui.design/',
    links: {
      source: 'https://github.com/magicuidesign/magicui',
      website: 'https://magicui.design/',
    },
  },
  {
    id: 'focus-brew',
    imageUrl: 'https://focusbrew.vercel.app/images/preview.png',
    url: 'https://focusbrew.vercel.app/',
    links: {
      source: 'https://github.com/birobirobiro/focus-brew',
      website: 'https://focusbrew.vercel.app/',
    },
  },
  {
    id: 'retro-ui',
    imageUrl: 'https://www.retroui.dev/banner.png',
    url: 'https://www.retroui.dev/',
    links: {
      source: 'https://github.com/Logging-Stuff/retroui',
      website: 'https://www.retroui.dev/',
    },
  },
  {
    id: 'volley-driven-development',
    imageUrl:
      'https://opengraph.githubassets.com/9622c284fd9b4b526d37f4808dbf9f71d2e1c50b2ca9e8c1dde22113bc90fe7f/h3rmel/volley-driven-development',
    url: 'https://volley-driven-development.vercel.app/',
    links: {
      source: 'https://github.com/h3rmel/volley-driven-development',
      website: 'https://volley-driven-development.vercel.app/',
    },
  },
];
