import { cn } from '@/lib/utils';

export function LinksList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={cn('group', className)}>{children}</ul>;
}
