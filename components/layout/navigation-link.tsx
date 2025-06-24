'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { buttonVariants } from '../ui/button';

export function NavigationLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost', size: 'sm' }),
        pathname === href && 'bg-accent/50 border-border',
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
