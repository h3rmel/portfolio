<script setup lang="ts">
import { Section } from '@/components/layout';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious, CarouselContent } from '@/components/ui/carousel';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';

import { portfolioProjectsData } from '@/data/portfolioProjects';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
<template>
  <Section :title="t('portfolio.title')" :subtitle="t('portfolio.subtitle')">
    <Carousel class="w-full gap-2 overflow-hidden sm:overflow-visible" aria-label="Projetos do portfólio">
      <CarouselContent>
        <CarouselItem v-for="project in portfolioProjectsData" :key="project.name" class="sm:basis-1/2">
          <Card class="group duration-300 md:hover:border-emerald-500" :visual-effect="true">
            <CardHeader>
              <a
                :href="project.url"
                class="underline duration-300 group-hover:text-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Abrir ${project.name} em uma nova aba`"
              >
                <CardTitle>{{ project.name }}</CardTitle>
              </a>
              <CardDescription>{{ t(`portfolio.projects.${project.description}`) }}</CardDescription>
            </CardHeader>
            <CardContent class="md:group-hover:border-emerald-500 duration-300">
              <img
                :src="project.imageUrl"
                :alt="`Imagem do projeto ${project.name}`"
                width="480"
                height="360"
                class="mx-auto rounded-lg border border-border"
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
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden md:inline-flex" aria-label="Projeto anterior" />
      <CarouselNext class="hidden md:inline-flex" aria-label="Próximo projeto" />
      <ScrollIndicator class="mx-auto mt-2 sm:hidden" orientation="horizontal" aria-label="Indicador de rolagem" />
    </Carousel>
    <img
      src="/shapes/square.webp"
      alt=""
      class="opacity-60 rotate-45 w-16 sm:w-24 h-16 sm:h-24 absolute -bottom-8 sm:-bottom-12 -right-8 sm:-left-12"
      aria-hidden="true"
    />
  </Section>
</template>
