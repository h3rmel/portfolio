'use client';

import { motion } from 'motion/react';
import { type ReactElement } from 'react';

import { GlareHover } from '../ui/glare-hover';

import { Section } from '@/components/shared/section';
import { stack } from '@/config/stack';
import { useMechanicalVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

export function StackSection(): ReactElement {
  const mechanical = useMechanicalVariants({ stagger: 0.055, duration: 0.32, offsetY: 0 });

  return (
    <Section index='04' title='Technical Stack'>
      <div className={cn('grid', 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5', 'gap-px bg-border border border-border')}>
        {stack.map((item, i) => (
          <GlareHover className='w-full' height='100%' key={item.name} duration={500} opacity={0.1}>
            <motion.div
              custom={i}
              variants={mechanical}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className={cn(
                'h-full w-full flex flex-col items-center justify-center gap-2',
                'bg-background p-6 hover:bg-card',
                'transition-colors duration-100',
              )}
            >
              <span className='font-mono text-sm font-medium text-foreground '>{item.name}</span>
              <span className='font-mono text-xs tracking-widest text-muted-foreground uppercase'>{item.category}</span>
            </motion.div>
          </GlareHover>
        ))}
      </div>
    </Section>
  );
}
