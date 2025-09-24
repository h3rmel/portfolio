import { Icons } from '@/components/ui/icons';

import { siteConfig } from './site';

type NavigationItem = {
  label: string;
  href: string;
  disabled?: boolean;
  icon?: keyof typeof Icons;
};

export const navigationLinks: NavigationItem[] = [
  {
    label: 'About',
    href: '/about',
    icon: 'InfoCircle',
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: 'Compass',
  },
];

export const cvLinks: NavigationItem[] = [
  {
    label: 'English',
    href: siteConfig.links.cvEnglish,
    icon: 'File',
  },
  {
    label: 'Portuguese',
    href: siteConfig.links.cvPortuguese,
    icon: 'File',
  },
];

export const socialLinks: NavigationItem[] = [
  {
    label: 'GitHub',
    href: siteConfig.links.github,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.links.linkedin,
  },
  {
    label: 'X',
    href: siteConfig.links.x,
  },
  {
    label: 'Email',
    href: siteConfig.links.email,
  },
];
