'use client';

import { Download, Github, Linkedin, Terminal } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { type ReactElement } from 'react';

import { Section } from '../shared/section';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { EASE_MECHANICAL, useMechanicalVariants } from '@/lib/motion';

export function HeroSection(): ReactElement {
  const prefersReducedMotion = useReducedMotion();

  const mechanical = useMechanicalVariants({ stagger: 0.09 });

  const ctaInitial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 };

  return (
    <Section index='01' title='Hero' hideSectionHeading>
      <div className='relative z-10 max-w-3xl'>
        {/* System status line */}
        <motion.div
          custom={0}
          variants={mechanical}
          initial='hidden'
          animate='visible'
          className='mb-8 flex items-center gap-3'
        >
          <Terminal className='h-4 w-4 text-primary' />
          <span className='font-mono text-xs tracking-widest text-muted-foreground uppercase'>sys.status — online</span>
          <span className='inline-block h-2 w-2 bg-primary rounded-full shadow-[0_0_6px_oklch(0.55_0.25_29)]' />
        </motion.div>
      </div>
      <div className='relative z-10 max-w-3xl'>
        {/* Name */}
        <motion.div custom={1} variants={mechanical} initial='hidden' animate='visible' className='mb-4'>
          <h1 className='font-sans text-4xl font-bold tracking-normal text-foreground md:text-5xl lg:text-6xl'>
            {siteConfig.name}
          </h1>
        </motion.div>
      </div>
      <div className='relative z-10 max-w-3xl'>
        {/* Core value proposition — static markup for LCP (no Framer initial opacity on this node). */}
        <p className='mb-4 max-w-3xl font-sans text-lg leading-relaxed text-muted-foreground md:text-xl'>
          Full-stack Software Engineer with <span className='font-medium text-foreground'>4 years</span> in the
          JavaScript/TypeScript ecosystem, and maintainer of{' '}
          <span className='font-medium text-foreground'>guarahooks</span> — an open-source React hooks library
          distributed via the shadcn registry (CLI on npm). I build React/Next.js front-ends tuned for{' '}
          <span className='font-medium text-foreground'>Core Web Vitals</span> and NestJS/Node.js back-ends with REST
          APIs and data-processing pipelines, under{' '}
          <span className='font-medium text-foreground'>Shift-Left testing (TDD/BDD)</span>.
        </p>
      </div>
      <div className='relative z-10 max-w-3xl'>
        {/* CTA switches */}
        <motion.div
          custom={3}
          variants={mechanical}
          initial='hidden'
          animate='visible'
          className='mt-4 flex flex-wrap gap-4'
        >
          <motion.div
            initial={ctaInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.34, duration: 0.35, ease: EASE_MECHANICAL }}
          >
            <Link
              href={siteConfig.resume}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Open resume (Google Docs)'
            >
              <Button size='lg' variant='default'>
                <Download className='h-4 w-4' />
                Resume
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={ctaInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.46, duration: 0.35, ease: EASE_MECHANICAL }}
          >
            <Link href={siteConfig.github} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='outline'>
                <Github className='h-4 w-4' />
                GitHub
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={ctaInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.58, duration: 0.35, ease: EASE_MECHANICAL }}
          >
            <Link href={siteConfig.linkedin} target='_blank' rel='noopener noreferrer'>
              <Button size='lg' variant='outline'>
                <Linkedin className='h-4 w-4' />
                LinkedIn
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
