import { cn } from '@/lib/utils';

export function Logo() {
  return (
    <span className={cn('relative select-none')}>
      <span className={cn('text-2xl tracking-wide')}>I</span>
      <span className={cn('text-2xl tracking-wide -ml-1.5')}>H</span>
    </span>
  );
}
