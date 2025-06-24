export type Project = {
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  url: string;
  links?: {
    source?: string;
    website?: string;
  };
};

export const projects: Project[] = [
  {
    title: 'guarahooks',
    description:
      'Collection of reusable and customizable hooks that you can copy-and-paste into your apps. Free. Open Source and Open Code.',
    imageUrl: 'https://guarahooks.com/og.webp',
    url: 'https://guarahooks.com/',
    links: {
      source: 'https://github.com/h3rmel/guarahooks',
      website: 'https://guarahooks.com/',
    },
  },
  {
    title: 'Magic UI',
    description:
      'UI library for Design Engineers. Animated components and effects to copy-and-paste into your React apps.',
    videoUrl: 'https://cdn.magicui.design/bento-grid.mp4',
    url: 'https://magicui.design/',
    links: {
      source: 'https://github.com/magicuidesign/magicui',
      website: 'https://magicui.design/',
    },
  },
  {
    title: 'FocusBrew',
    description:
      'Free productivity toolkit that combines essential tools to help you stay focused, organized and efficient throughout your workday.',
    imageUrl: 'https://focusbrew.vercel.app/images/preview.png',
    url: 'https://focusbrew.vercel.app/',
    links: {
      source: 'https://github.com/birobirobiro/focus-brew',
      website: 'https://focusbrew.vercel.app/',
    },
  },
  {
    title: 'RetroUI',
    description:
      'Retro-styled UI library for modern web applications using React. Shadcn UI components with a retro aesthetic.',
    imageUrl: 'https://www.retroui.dev/banner.png',
    url: 'https://www.retroui.dev/',
    links: {
      source: 'https://github.com/Logging-Stuff/retroui',
      website: 'https://www.retroui.dev/',
    },
  },
];
