import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { siteConfig } from '@/config/site';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: siteConfig.name,
  },
};
