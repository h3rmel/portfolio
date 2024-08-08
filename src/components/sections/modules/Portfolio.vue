<script setup lang="ts">
import { Section } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';

import { portfolioProjectsData } from '@/data/portfolioProjects';
</script>
<template>
  <Section :title="$t('portfolio.title')" :subtitle="$t('portfolio.subtitle')">
    <Carousel class="w-full gap-2 overflow-hidden sm:overflow-visible">
      <CarouselContent>
        <CarouselItem v-for="project in portfolioProjectsData" :key="project.name" class="sm:basis-1/2">
          <!-- <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 + index / 5 }}
              > -->
          <Card class="group duration-300 hover:border-emerald-500" :visual-effect="true">
            <CardHeader>
              <a :href="project.url" class="underline duration-300 group-hover:text-emerald-500" target="_blank">
                <CardTitle>{{ project.name }}</CardTitle>
              </a>
              <CardDescription>{{ $t(`portfolio.projects.${project.description}`) }}</CardDescription>
            </CardHeader>
            <CardContent class="group-hover:border-emerald-500 duration-300">
              <img
                :src="project.imageUrl"
                :alt="`${project.name}'s picture`"
                width="{480}"
                height="{360}"
                class="mx-auto rounded-lg border border-border"
              />
            </CardContent>
            <CardFooter class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <ul v-if="project.topics.length > 0" class="flex basis-3/4 flex-wrap gap-1">
                <li v-for="topic in project.topics" :key="topic">
                  <Badge variant="secondary" class="capitalize">
                    {{ topic }}
                  </Badge>
                </li>
              </ul>
              <Badge variant="outline"> {{ $t('portfolio.license') }} {{ project.license }} </Badge>
            </CardFooter>
          </Card>
          <!-- </motion.div> -->
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden md:inline-flex" />
      <CarouselNext class="hidden md:inline-flex" />
      <ScrollIndicator class="mx-auto mt-2 sm:hidden" orientation="horizontal" />
    </Carousel>
    <!-- Absolute Shape -->
    <img
      src="/shapes/square.webp"
      role="figure"
      alt="Square shape for decoration"
      class="opacity-60 rotate-45 w-16 sm:w-24 h-16 sm:h-24 absolute -bottom-8 sm:-bottom-12 -right-8 sm:-left-12"
    />
  </Section>
</template>
