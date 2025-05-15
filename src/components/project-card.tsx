'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';

import { Github, Globe } from 'lucide-react';

import { MagicCard } from '@/components/magicui/magic-card';
import { ProjectBanner } from '@/components/project-banner';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

import { cn } from '@/lib/utils';

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
  const { theme } = useTheme();

  const { links } = content;

  return (
    <Card className={cn('rounded-md')}>
      <MagicCard
        className="p-0 h-full w-fit border-none"
        gradientFrom="#f43f5e"
        gradientTo="#10b981"
        gradientColor={theme === 'dark' ? '#27272a' : '#e4e4e7'}
      >
        <CardHeader className="border-b rounded-b-md">
          <ProjectBanner
            title={content.title}
            description={content.description}
            imageLink={content.imageLink}
            videoLink={content.videoLink}
          />
        </CardHeader>
        <CardContent className="py-4">
          <h3 className={cn('text-base font-bold')}>{content.title}</h3>
          <p className={cn('text-xs text-muted-foreground')}>{content.description}</p>
          <ul className={cn('flex flex-wrap gap-1', 'mt-2')}>
            {content.tags.map((tag) => (
              <li key={tag}>
                <Badge className={cn('text-[10px]', 'px-1 py-0')}>{tag}</Badge>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="border-t rounded-t-md flex items-center gap-2">
          {links.source && (
            <Link
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
              href={links.source}
              target="_blank"
              aria-label="Ver código fonte"
            >
              <Github className={cn('size-4')} />
              Source
            </Link>
          )}
          {links.website && (
            <Link
              className={buttonVariants({ variant: 'secondary', size: 'sm' })}
              href={links.website}
              target="_blank"
              aria-label="Ver site"
            >
              <Globe className={cn('size-4')} />
              Website
            </Link>
          )}
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
