'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactElement } from 'react';

import { Section } from '@/components/shared/section';
import { StatusIndicator } from '@/components/shared/status-indicator';
import { Badge } from '@/components/ui/badge';
import type { ProjectEntry } from '@/config/projects';
import { projects } from '@/config/projects';
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

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
  featured?: boolean;
}

function ProjectCard({ project, index, featured = false }: ProjectCardProps): ReactElement {
  return (
    <motion.a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      custom={index}
      variants={mechanical}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-64px' }}
      className={cn(
        'group flex h-full flex-col gap-4 border border-border bg-background p-6 transition-all duration-100',
        'hover:translate-y-[-2px] hover:border-foreground hover:shadow-[0_4px_0_0_oklch(0.87_0.006_264)]',
        featured && 'md:p-8',
      )}
    >
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <StatusIndicator status={project.status} />
          <span
            className={cn('font-mono font-semibold text-foreground', featured ? 'text-base md:text-lg' : 'text-sm')}
          >
            {project.name}
          </span>
        </div>
        <ArrowUpRight
          className={cn(
            'text-border transition-colors duration-100 group-hover:text-primary',
            featured ? 'h-5 w-5' : 'h-4 w-4',
          )}
        />
      </div>

      {/* Metric */}
      {featured ? (
        <div className='flex flex-wrap gap-x-6 gap-y-2 border-y border-border py-3'>
          {project.metric.split(' · ').map((m) => (
            <span key={m} className='font-mono text-sm font-bold tracking-wide text-primary'>
              {m}
            </span>
          ))}
        </div>
      ) : (
        <span className='font-mono text-xs font-bold tracking-wide text-primary'>{project.metric}</span>
      )}

      {/* Description */}
      <p
        className={cn(
          'flex-1 leading-relaxed text-muted-foreground text-justify',
          featured ? 'text-sm md:text-base' : 'text-sm',
        )}
      >
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
 * Row 1: [Featured ·········] [Card]
 * Row 2: [Card] [Card ··············]
 */
const bentoPositions = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-2'] as const;

export function ProjectsSection(): ReactElement {
  return (
    <Section index='03' title='Open-Source & Architecture'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, i) => (
          <div key={project.name} className={bentoPositions[i]}>
            <ProjectCard project={project} index={i} featured={i === 0} />
          </div>
        ))}
      </div>
    </Section>
  );
}
