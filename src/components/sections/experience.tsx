'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useMemo, type ReactElement } from 'react';

import { Section } from '@/components/shared/section';
import { StatusIndicator } from '@/components/shared/status-indicator';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { experience } from '@/config/experience';
import { cn } from '@/lib/utils';

const EASE_MECHANICAL = [0.22, 1, 0.36, 1] as const;

export function ExperienceSection(): ReactElement {
  const prefersReducedMotion = useReducedMotion();

  const mechanical = useMemo(
    () => ({
      hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 8 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: prefersReducedMotion
          ? { duration: 0 }
          : {
              delay: i * 0.1,
              duration: 0.45,
              ease: EASE_MECHANICAL,
            },
      }),
    }),
    [prefersReducedMotion],
  );

  return (
    <Section index='02' title='Professional Experience'>
      <div className='grid gap-6'>
        {experience.map((entry, i) => (
          <motion.div
            key={entry.company}
            custom={i}
            variants={mechanical}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-64px' }}
          >
            {i > 0 && <Separator className='my-0' />}
            <div
              className={cn(
                'group',
                'flex flex-col md:flex-row gap-4',
                'bg-background',
                'border border-border p-6',
                'transition-all duration-200 hover:translate-x-1 hover:border-foreground hover:shadow-[-4px_0_0_0_oklch(0.87_0.006_264)]',
              )}
            >
              <div className='flex flex-1/2 flex-col gap-2'>
                <h3 className='font-mono text-sm font-semibold text-foreground'>{entry.company}</h3>
                <p className='font-mono text-xs text-muted-foreground'>{entry.role}</p>
                <p className='font-mono text-xs text-muted-foreground'>{entry.period}</p>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='inline-flex items-center gap-2'>
                  <StatusIndicator status={'active'} />
                  <span className='font-mono text-sm font-bold tracking-wide text-foreground'>{entry.metric}</span>
                </div>

                <p className='text-sm leading-loose text-justify text-muted-foreground'>{entry.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant='outline' className='font-mono text-xs tracking-wider uppercase'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
