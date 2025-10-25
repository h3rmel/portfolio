import type { HTMLAttributeAnchorTarget } from 'react';

import { icons } from '@tabler/icons-react';

import { cn } from '@/lib/utils';

import { Icon } from './icon';
import { buttonVariants } from './ui/button';

export function LinksListItem({
  href,
  children,
  className,
  linkClassName,
  icon,
  target = '_self',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  linkClassName?: string;
  icon?: keyof typeof icons;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <li className={cn('w-full', className)}>
      <a
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'w-full justify-between text-base group',
          'group-hover:hover:opacity-100 group-hover:opacity-60',
          'hover:[&_svg]:translate-x-1 [&_svg]:transition-transform',
          linkClassName,
        )}
        href={href}
        target={target}
      >
        {children}
        {icon && <Icon icon={icon} />}
      </a>
    </li>
  );
}
