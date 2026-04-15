'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useMemo, type ReactElement } from 'react';

import { Section } from '@/components/shared/section';
import { StatusIndicator } from '@/components/shared/status-indicator';
import { Badge } from '@/components/ui/badge';
import type { ProjectEntry } from '@/config/projects';
import { projects } from '@/config/projects';
import { cn } from '@/lib/utils';

const EASE_MECHANICAL = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
  variants: Variants;
}

function ProjectCard({ project, index, variants }: ProjectCardProps): ReactElement {
  return (
    <motion.a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`${project.name} (opens in new tab)`}
      custom={index}
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-64px' }}
      className={cn(
        'group flex h-full w-full flex-col gap-4 border border-border bg-background p-6 transition-all duration-100',
        'hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_4px_0_0_oklch(0.87_0.006_264)]',
        'outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50',
      )}
    >
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <StatusIndicator status={project.status} />
          <h3 className={cn('m-0 font-mono font-semibold text-foreground', 'text-sm')}>{project.name}</h3>
        </div>
        <ArrowUpRight
          className={cn('text-border transition-colors duration-100 group-hover:text-primary', 'h-4 w-4')}
        />
      </div>

      {/* Metric */}
      {project.metric.length > 0 ? (
        <div className='flex flex-wrap gap-x-6 gap-y-2 border-y border-border py-3'>
          {project.metric.split(' · ').map((m) => (
            <span key={m} className='font-mono text-sm font-bold tracking-wide text-foreground'>
              {m}
            </span>
          ))}
        </div>
      ) : null}

      {/* Description */}
      <p className={cn('flex-1 leading-relaxed text-muted-foreground text-justify', 'text-sm')}>
        {project.description}
      </p>

      {/* Tags */}
      <div className='flex flex-wrap gap-2 border-t border-border pt-3'>
        {project.tags.map((tag) => (
          <Badge key={tag} variant='outline' className='font-mono text-[10px] tracking-wider uppercase'>
            {tag}
          </Badge>
        ))}
      </div>
    </motion.a>
  );
}

/**
 * Bento layout (3 cols × 2 rows):
 * Row 1: [ Featured wide ] [ Card ]
 * Row 2: [ Card ] [ Wide ]
 */
const bentoPositions = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-2'] as const;

export function ProjectsSection(): ReactElement {
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
    <Section index='03' title='Open-Source & Architecture'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch'>
        {projects.map((project, i) => (
          <div key={project.name} className={cn(bentoPositions[i], 'min-w-0')}>
            <ProjectCard project={project} index={i} variants={mechanical} />
          </div>
        ))}
      </div>
    </Section>
  );
}
