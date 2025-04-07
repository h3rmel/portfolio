import Image from 'next/image';
import Link from 'next/link';

import { Github, Globe } from 'lucide-react';

import { cn } from '@/lib/utils';

import { ProjectBanner } from './project-banner';
import { Badge } from './ui/badge';
import { buttonVariants } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

type ProjectCardProps = {
  content: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageLink: string;
    videoLink: string;
    links: {
      source: string;
      website: string;
    };
  };
};

export function ProjectCard({ content }: ProjectCardProps) {
  const { links } = content;

  return (
    <Card className={cn('border border-dashed')}>
      <CardHeader className={cn('rounded-b-xl')}>
        <ProjectBanner
          title={content.title}
          description={content.description}
          imageLink={content.imageLink}
          videoLink={content.videoLink}
        />
      </CardHeader>
      <CardContent className={cn('p-4', 'h-full', 'space-y-1')}>
        <h3 className={cn('text-base font-bold')}>{content.title}</h3>
        <p className={cn('text-xs text-muted-foreground')}>{content.description}</p>
        <ul className={cn('flex flex-wrap gap-1')}>
          {content.tags.map((tag) => (
            <li key={tag}>
              <Badge className={cn('text-[10px]', 'px-1 py-0 rounded-md')}>{tag}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter
        className={cn('flex gap-2', 'p-4', 'rounded-t-xl border-t border-dashed')}
      >
        {links.source && (
          <Link
            className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            href={links.source}
          >
            <Github className={cn('size-4')} />
            Source
          </Link>
        )}
        {links.website && (
          <Link
            className={buttonVariants({ variant: 'secondary', size: 'sm' })}
            href={links.website}
          >
            <Globe className={cn('size-4')} />
            Website
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
