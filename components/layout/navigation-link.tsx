'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Button, ButtonProps } from '../ui/button';

export function NavigationLink({
  href,
  label,
  icon,
  className,
  ...rest
}: ButtonProps & { href: string; label: string; icon: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Button
      asChild
      className={cn(className, pathname === href && 'bg-accent/50 border-border')}
      {...rest}
    >
      <Link href={href}>
        {icon}
        {label}
      </Link>
    </Button>
  );
}