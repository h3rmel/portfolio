import { memo } from 'react';
import { cn } from '@/lib/utils';
import type { LinksListItemProps } from '@/types';
import { Icon } from './icon';
import { buttonVariants } from './ui/button';

/**
 * Individual link item with optional icon and hover effects.
 * Styled as a button with support for internal and external links.
 * Memoized for performance in lists.
 *
 * @param href - Link destination URL
 * @param children - Link text or content
 * @param className - Optional CSS classes for the list item wrapper
 * @param linkClassName - Optional CSS classes for the anchor element
 * @param icon - Optional Tabler icon name to display
 * @param target - Link target attribute (default: '_self')
 * @param ariaLabel - Optional aria-label attribute
 * @returns A styled link item with icon support
 */
export const LinksListItem = memo(function LinksListItem({
  href,
  children,
  className,
  linkClassName,
  icon,
  target = '_self',
  ariaLabel,
}: LinksListItemProps) {
  return (
    <li className={cn('w-full', className)}>
      <a
        className={cn(
          buttonVariants({ variant: 'secondary', size: 'lg' }),
          'group w-full justify-between text-base',
          'group-hover:opacity-60 group-hover:hover:opacity-100',
          '[&_svg]:transition-transform hover:[&_svg]:translate-x-1',
          linkClassName,
        )}
        href={href}
        target={target}
        aria-label={ariaLabel}
      >
        {children}
        {icon && <Icon icon={icon} />}
      </a>
    </li>
  );
});
