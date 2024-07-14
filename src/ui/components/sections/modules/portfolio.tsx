'use client';

// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { DraftingCompass } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Badge } from '@/ui/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/ui/components/ui/dialog';

import { PROJECTS_DATA } from '@/data/portfolio';
import { PORTFOLIO_LANGUAGES } from '@/i18n/portfolio';

// #endregion

interface PortfolioProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Projects Section
 *
 * @see PortfolioProps for the props interface.
 * @returns The Projects Section with his ref being forwarded.
 */
export const Portfolio = forwardRef<HTMLElement, PortfolioProps>(function RenderPortfolio(props, ref): JSX.Element {
  const { translate } = useLanguage();

  return (
    <Section {...props} ref={ref}>
      {/* Content */}
      <DraftingCompass className="absolute right-4 top-4 h-8 w-8 text-muted-foreground" />
      {/* Header */}
      <hgroup className="flex flex-col gap-1">
        <h2 className="text-2xl">{translate('portfolio', PORTFOLIO_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('projects-list', PORTFOLIO_LANGUAGES)}</p>
      </hgroup>
      {/* Carousel */}
      <Carousel>
        <CarouselContent>
          {PROJECTS_DATA.map((project) => (
            <CarouselItem key={project.name} className="basis-1/2">
              <Card>
                <CardHeader>
                  <Link href={project.url} className="underline duration-300 hover:text-emerald-500" target="_blank">
                    <CardTitle>{project.name}</CardTitle>
                  </Link>
                  <CardDescription>{translate(project.description, PORTFOLIO_LANGUAGES)}</CardDescription>
                </CardHeader>
                <CardContent>
                  {project.image && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Image
                          src={project.image}
                          alt={`${project.name}'s picture`}
                          width={480}
                          height={360}
                          className="mx-auto cursor-pointer rounded-lg border border-border"
                        />
                      </DialogTrigger>
                      <DialogContent className="w-full max-w-7xl">
                        <Image
                          src={project.image}
                          alt={`${project.name}'s picture`}
                          width={1366}
                          height={768}
                          className="mx-auto rounded-lg border border-border"
                        />
                      </DialogContent>
                    </Dialog>
                  )}
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  {project.topics.length > 0 && (
                    <ul className="flex basis-3/4 flex-wrap gap-1">
                      {project.topics.map((topic) => (
                        <li key={topic}>
                          <Badge variant="secondary" className="capitalize">
                            {topic}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Badge variant="outline">
                    {translate('license', PORTFOLIO_LANGUAGES)}: {project.license}
                  </Badge>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
});
