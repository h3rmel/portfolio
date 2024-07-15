'use client';

// #region Imports

import { ComponentPropsWithoutRef, forwardRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { DraftingCompass } from 'lucide-react';

import { useLanguage } from '@/ui/components/language';
import { Section } from '@/ui/components/layout';
import { Badge } from '@/ui/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/ui/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/ui/components/ui/dialog';

import { PROJECTS_DATA } from '@/data/portfolio';
import { PORTFOLIO_LANGUAGES } from '@/i18n/portfolio';
import { useWindowDimensions } from '@/lib/screen-dimensions';

// #endregion

interface PortfolioProps extends ComponentPropsWithoutRef<'section'> {}

/**
 * Projects Section
 *
 * @component
 * @see PortfolioProps for the props interface.
 * @returns The Projects Section with his ref being forwarded.
 */
export const Portfolio = forwardRef<HTMLElement, PortfolioProps>(function RenderPortfolio(props, ref): JSX.Element {
  const { translate } = useLanguage();
  const { windowWidth } = useWindowDimensions();

  return (
    <Section {...props} ref={ref}>
      {/* Content */}
      <DraftingCompass className="absolute right-4 top-4 h-6 w-6 text-muted-foreground opacity-30 sm:h-8 sm:w-8" />
      {/* Header */}
      <hgroup className="flex flex-col gap-1">
        <h2 className="text-2xl">{translate('portfolio', PORTFOLIO_LANGUAGES)}</h2>
        <p className="text-muted-foreground">{translate('projects-list', PORTFOLIO_LANGUAGES)}</p>
      </hgroup>
      {/* Carousel */}
      <Carousel className="w-full overflow-hidden sm:overflow-visible">
        <CarouselContent>
          {PROJECTS_DATA.map((project) => (
            <CarouselItem key={project.name} className="sm:basis-1/2">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Card>
                  <CardHeader>
                    <Link href={project.url} className="underline duration-300 hover:text-emerald-500" target="_blank">
                      <CardTitle>{project.name}</CardTitle>
                    </Link>
                    <CardDescription>{translate(project.description, PORTFOLIO_LANGUAGES)}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {windowWidth > 640 ? (
                      // Desktop version
                      <Dialog>
                        <DialogTrigger asChild>
                          <Image
                            src={project.image}
                            alt={`${project.name}'s picture`}
                            width={480}
                            height={360}
                            className="mx-auto rounded-lg border border-border"
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
                    ) : (
                      // Mobile version
                      <Image
                        src={project.image}
                        alt={`${project.name}'s picture`}
                        width={480}
                        height={360}
                        className="mx-auto rounded-lg border border-border"
                      />
                    )}
                  </CardContent>
                  <CardFooter className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
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
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
      </Carousel>
    </Section>
  );
});
