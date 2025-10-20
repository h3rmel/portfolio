import type { HTMLAttributeAnchorTarget } from 'react';

import { cn } from '@/lib/utils';

import { Icons, renderIcon } from './icons';
import { buttonVariants } from './ui/button';

export function LinksListItem({
  href,
  children,
  className,
  linkClassName,
  icon = 'ChevronRight',
  target = '_self',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  linkClassName?: string;
  icon?: keyof typeof Icons;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <li className={cn('w-full', className)}>
      <a
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'w-full justify-between text-base group',
          'group-hover:hover:opacity-100 group-hover:opacity-60',
          'hover:[&_svg]:translate-x-1 [&_svg]:transition-transform',
          linkClassName,
        )}
        href={href}
        target={target}
      >
        {children}
        {icon && renderIcon(icon)}
      </a>
    </li>
  );
}
