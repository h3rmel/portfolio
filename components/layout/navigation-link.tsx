'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { buttonVariants } from '../ui/button';

export function NavigationLink({
  href,
  label,
  icon,
  variant = 'ghost',
  size = 'sm',
  className,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  variant?: 'default' | 'secondary' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant, size }),
        pathname === href && 'bg-accent/50 border-border',
        className,
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
