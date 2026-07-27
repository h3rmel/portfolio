'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion, type Variants } from 'motion/react';
import { type ReactElement } from 'react';

import { Section } from '@/components/shared/section';
import { StatusIndicator } from '@/components/shared/status-indicator';
import { Badge } from '@/components/ui/badge';
import type { ProjectEntry } from '@/config/projects';
import { projects } from '@/config/projects';
import { useMechanicalVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

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
        <div className='flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-3'>
          {project.metric.split(' · ').map((m) => (
            <Badge key={`${project.name}-${m}`} variant='outline' className='font-mono text-sm tracking-wide'>
              {m}
            </Badge>
          ))}
        </div>
      ) : null}

      {/* Description */}
      <p className={cn('flex-1 leading-loose text-muted-foreground text-justify', 'text-sm')}>{project.description}</p>

      {/* Tags */}
      <div className='flex flex-wrap gap-2 border-t border-border pt-3'>
        {project.tags.map((tag) => (
          <Badge key={tag} variant='outline' className='font-mono text-xs tracking-wider uppercase'>
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
  const mechanical = useMechanicalVariants();

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
