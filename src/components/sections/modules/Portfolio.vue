<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { Section } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from '@/components/ui/carousel';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';

import { cn } from '@/utils/cn';

import { portfolioProjectsData } from '@/data/portfolioProjects';

const { t } = useI18n();
</script>

<template>
  <Section :title="t('portfolio.title')" :subtitle="t('portfolio.subtitle')">
    <Carousel class="w-full gap-2 overflow-hidden sm:overflow-visible" aria-label="Projetos do portfólio">
      <CarouselContent>
        <CarouselItem v-for="(project, index) in portfolioProjectsData" :key="project.name" class="sm:basis-1/2">
          <div
            class="h-full w-full"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 90, damping: 30, ease: 'easeInOut' }
            }"
            :delay="100 * index + 1"
            :duration="1000"
          >
            <Card class="group duration-300 md:hover:border-emerald-500" :visual-effect="true">
              <CardHeader>
                <a
                  :href="project.url"
                  :class="cn('duration-300 group-hover:text-emerald-500', project.url && 'underline')"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="`Abrir ${project.name} em uma nova aba`"
                >
                  <CardTitle>{{ project.name }}</CardTitle>
                </a>
                <CardDescription>{{ t(`portfolio.projects.${project.description}`) }}</CardDescription>
              </CardHeader>
              <CardContent class="flex items-center justify-center duration-300 md:group-hover:border-emerald-500">
                <img
                  :src="project.imageUrl"
                  :alt="`Imagem do projeto ${project.name}`"
                  width="480"
                  height="360"
                  class="h-auto w-full max-w-[480px] rounded-lg border border-border"
                />
              </CardContent>
              <CardFooter class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
                <ul
                  v-if="project.topics.length > 0"
                  class="flex basis-3/4 flex-wrap gap-1"
                  aria-label="Tópicos do projeto"
                >
                  <li v-for="topic in project.topics" :key="topic">
                    <Badge variant="secondary" class="capitalize">
                      {{ topic }}
                    </Badge>
                  </li>
                </ul>
                <Badge variant="outline" aria-label="Licença do projeto">
                  {{ t('portfolio.license') }} {{ project.license }}
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden md:inline-flex" aria-label="Projeto anterior" />
      <CarouselNext class="hidden md:inline-flex" aria-label="Próximo projeto" />
      <ScrollIndicator class="mx-auto mt-2 sm:hidden" orientation="horizontal" aria-label="Indicador de rolagem" />
    </Carousel>
    <img
      src="/shapes/square.webp"
      alt=""
      class="absolute -bottom-8 -right-8 h-16 w-16 rotate-45 opacity-60 sm:-bottom-12 sm:-left-12 sm:h-24 sm:w-24"
      aria-hidden="true"
    />
  </Section>
</template>
