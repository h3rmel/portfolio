import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';

import { cn } from '@/lib/utils';

import { Project } from '@/config/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      key={project.title}
      className={cn('flex flex-col', 'p-0', 'bg-background overflow-hidden', 'group')}
    >
      <CardHeader className={cn('p-0 border-b overflow-hidden', 'relative')}>
        <Link href={project.url} target="_blank">
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={1000}
              height={1000}
              className={cn(
                'rounded-t-xl',
                'max-h-44 object-cover',
                'group-hover:scale-105 transition-all',
              )}
            />
          )}
          {project.videoUrl && (
            <video
              src={project.videoUrl}
              aria-label={`${project.title} video`}
              autoPlay
              muted
              loop
              className={cn(
                'rounded-t-xl',
                'max-h-44 w-full object-cover',
                'group-hover:scale-105 transition-all',
              )}
            />
          )}
          <div
            className={cn(
              'absolute top-0 left-0',
              'flex items-center justify-center',
              'w-full h-full bg-background/50',
              'opacity-0 group-hover:opacity-100 transition-opacity',
            )}
          >
            <Icons.ExternalLink className="size-8" />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <h2 className={cn('text-lg font-bold')}>{project.title}</h2>
        <p className={cn('text-sm text-muted-foreground')}>{project.description}</p>
      </CardContent>
      <CardFooter className="pb-4 space-x-2">
        {project.links?.source && (
          <Link
            href={project.links.source}
            target="_blank"
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
          >
            <Icons.Github className="size-4" />
            Source
          </Link>
        )}
        {project.links?.website && (
          <Link
            href={project.links.website}
            target="_blank"
            className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
          >
            <Icons.WorldWWW className="size-4" />
            Website
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
