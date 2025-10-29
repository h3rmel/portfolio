import { cn } from '@/lib/utils';
import type { LinksListProps } from '@/types';

/**
 * Container component for a list of links with group hover effects.
 * Provides consistent styling and spacing for link items.
 *
 * @param children - Link items to be displayed
 * @param className - Optional additional CSS classes
 * @returns A styled unordered list container
 */
export function LinksList({ children, className }: LinksListProps) {
  return <ul className={cn('group', className)}>{children}</ul>;
}
