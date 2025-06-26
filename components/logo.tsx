import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('relative select-none', className)}>
      <span className={cn('text-2xl tracking-wide')}>I</span>
      <span className={cn('text-2xl tracking-wide -ml-1.5')}>H</span>
    </span>
  );
}
