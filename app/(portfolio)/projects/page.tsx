import { ProjectCard } from '@/components/project-card';

import { cn } from '@/lib/utils';

import { projects } from '@/config/projects';

export default function Page() {
  return (
    <>
      <hgroup className={cn('flex flex-col', 'mb-8')}>
        <h1 className={cn('text-2xl font-bold')}>Projects</h1>
        <p className={cn('text-sm text-muted-foreground')}>
          Explore my latest works and contributions.
        </p>
      </hgroup>
      {/* Projects Grid */}
      <article className={cn('flex flex-col space-y-8')}>
        <div className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4')}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </article>
    </>
  );
}
