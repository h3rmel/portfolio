import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

import type { Project } from '@/config/projects';
import { cn } from '@/lib/utils';

import { buttonVariants } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

interface ProjectCardProps {
  project: Project;
}

/**
 * Project card component displaying project information with media and action links.
 * Supports both image and video media types.
 *
 * @param project - Project data including title, description, media, and links
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-lg">
      {/* Media Section */}
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <div className="relative aspect-video w-full overflow-hidden bg-muted border-b">
          {project.videoUrl ? (
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              No preview available
            </div>
          )}
        </div>
      </a>

      {/* Content Section */}
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">{project.description}</CardDescription>
      </CardHeader>

      {/* Actions */}
      <CardFooter className="flex gap-2 p-4 border-t">
        {project.links?.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            <IconBrandGithub className="size-4" />
            Source
          </a>
        )}
        {project.links?.website && (
          <a
            href={project.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
          >
            <IconExternalLink className="size-4" />
            Website
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
