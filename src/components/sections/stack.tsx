'use client';

import { motion } from 'framer-motion';
import type { ReactElement } from 'react';

import { Section } from '@/components/shared/section';
import { stack } from '@/config/stack';
import { cn } from '@/lib/utils';

const mechanical = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.055,
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function StackSection(): ReactElement {
  return (
    <Section index='04' title='Technical Stack'>
      <div className={cn('grid', 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5', 'gap-px bg-border border border-border')}>
        {stack.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            variants={mechanical}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className={cn(
              'flex flex-col items-center justify-center gap-2',
              'bg-background p-6 hover:bg-card',
              'transition-colors duration-100',
            )}
          >
            <span className='font-mono text-sm font-medium text-foreground'>{item.name}</span>
            <span className='font-mono text-[10px] tracking-widest text-border uppercase'>{item.category}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
