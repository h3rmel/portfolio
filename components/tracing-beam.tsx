'use client';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

import { useScrollPosition } from '@/hooks/guarahooks/use-scroll-position';

export function TracingBeam({ children }: { children: React.ReactNode }) {
  const { y } = useScrollPosition();

  const scrollHeight = typeof window !== 'undefined' && typeof document !== 'undefined'
    ? document.documentElement.scrollHeight - window.innerHeight
    : 0;

  const scrollPercent = scrollHeight > 0 ? y / scrollHeight : 0;
  const beamHeight = `${scrollPercent * 100}%`;

  return (
    <div className={cn('relative mx-auto size-full max-w-screen-lg')}>
      <motion.div
        className={cn(
          'absolute z-50 top-0 -left-4 md:-left-[85px]',
          'size-3 rounded-md',
          'bg-accent',
          'hidden lg:block'
        )}
        animate={{
          backgroundColor: y > 0 ? '#10b981' : '#26262a',
        }}
      />
      <div
        className={cn(
          'absolute top-0 -left-4 md:-left-20',
          'w-[2px] h-full',
          'bg-accent/50',
          'hidden lg:block'
        )}
      >
        <motion.div
          className={cn(
            'size-full',
            'bg-gradient-to-b from-emerald-500/100 to-emerald-500/15',
          )}
          animate={{ height: beamHeight }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
