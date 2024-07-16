// #region Imports

import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

// #endregion

interface ScrollIndicatorProps extends ComponentPropsWithoutRef<'div'> {
  orientation?: 'vertical' | 'horizontal';
}

/**
 * Renders a scroll indicator
 *
 * @component
 * @see ScrollIndicatorProps for the props interface.
 * @returns The scroll indicator component
 */
export function ScrollIndicator({ orientation = 'vertical', className, ...props }: ScrollIndicatorProps): JSX.Element {
  return (
    <div
      className={cn(
        'relative flex rounded-3xl border-2 border-border',
        orientation === 'vertical' ? 'h-16 w-8 justify-center p-1' : 'h-8 w-16 items-center justify-end p-1',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'h-2 w-2 rounded-full bg-neutral-600 delay-0 duration-1000',
          orientation === 'vertical'
            ? 'animate-out fade-out-0 slide-out-to-bottom-10 repeat-infinite'
            : 'animate-out fade-out-0 slide-out-to-left-10 repeat-infinite',
        )}
      />
    </div>
  );
}
