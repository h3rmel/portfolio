'use client';

import { motion } from 'framer-motion';
import { ReactElement } from 'react';

import { Section } from '@/components/shared/section';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { experience } from '@/config/experience';
import { cn } from '@/lib/utils';

const mechanical = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function ExperienceSection(): ReactElement {
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
                'transition-all duration-200 hover:translate-x-[4px] hover:border-foreground hover:shadow-[-4px_0_0_0_oklch(0.87_0.006_264)]',
              )}
            >
              <div className='flex flex-1/2 flex-col gap-1'>
                <h3 className='font-mono text-sm font-semibold text-foreground'>{entry.company}</h3>
                <p className='font-mono text-xs text-muted-foreground'>{entry.role}</p>
                <p className='font-mono text-[10px] text-border'>{entry.period}</p>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='inline-flex items-center gap-2'>
                  <span className='inline-block h-1.5 w-1.5 bg-primary' />
                  <span className='font-mono text-sm font-bold tracking-wide text-primary'>{entry.metric}</span>
                </div>

                <p className='text-sm leading-relaxed text-justify text-muted-foreground'>{entry.description}</p>

                <div className='flex flex-wrap gap-2'>
                  {entry.tags.map((tag) => (
                    <Badge key={tag} variant='outline' className='font-mono text-[10px] tracking-wider uppercase'>
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
