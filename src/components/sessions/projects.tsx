import { cn } from '@/lib/utils';

import { DATA } from '@/config/data';

import { ProjectCard } from '../project-card';

export function Projects() {
  const { projects } = DATA.sessions;

  return (
    <section id="projects-session" className={cn('space-y-8')}>
      <hgroup className={cn('space-y-2')}>
        <h2 className={cn('text-2xl font-bold text-center')}>{projects.title}</h2>
        <p
          className={cn(
            'text-sm text-muted-foreground text-center',
            'max-w-[48ch] mx-auto',
          )}
        >
          {projects.description}
        </p>
      </hgroup>
      <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4')}>
        {projects.content.map((project) => (
          <ProjectCard key={project.title} content={project} />
        ))}
      </div>
    </section>
  );
}
