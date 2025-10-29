import type { Project } from '@/config/projects';

import { ProjectCard } from './projects-card';

interface ProjectsGridProps {
  projects: Project[];
}

/**
 * Grid layout component for displaying multiple project cards.
 * Responsive grid that adapts from 1 to 2 columns based on screen size.
 *
 * @param projects - Array of projects to display
 */
export function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed border-border">
        <p className="text-muted-foreground">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
