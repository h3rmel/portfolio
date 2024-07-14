'use client';

// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { DraftingCompass } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Badge } from '@/ui/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/components/ui/carousel';

import { PROJECTS_DATA } from '@/data/projects';
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
    <section {...props} ref={ref} className="border-divider">
      {/* Content */}
      <section className="container relative flex flex-col gap-8 border-x border-dashed border-border p-16">
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
              <CarouselItem className="basis-1/2">
                <Card>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                    <CardDescription>{translate(project.description, PORTFOLIO_LANGUAGES)}</CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
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
                    <p className="flex basis-1/4 justify-end">
                      {translate('license', PORTFOLIO_LANGUAGES)}:{' '}
                      <strong className="font-medium tracking-wide">{project.license}</strong>
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </section>
  );
});
