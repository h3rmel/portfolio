import type { ReactElement } from 'react';

import { cn } from '@/lib/utils';

/**
 * Placeholder while below-the-fold client sections load (code-split chunks).
 */
export function SectionLazyFallback({ className }: { className?: string }): ReactElement {
  return (
    <div
      className={cn('min-h-72 w-full border border-border/30 bg-background', className)}
      aria-busy
      aria-label='Loading section'
    />
  );
}
