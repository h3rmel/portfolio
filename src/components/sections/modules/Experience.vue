<script setup lang="ts">
import { Section } from '@/components/layout';
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from '@/components/ui/tooltip';

import { companiesAndClientsData } from '@/data/companiesAndClients';
import { cn } from '@/utils/cn';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <Section :title="t('experience.title')" :subtitle="t('experience.subtitle')">
    <!-- Paragraph -->
    <p class="text-foreground text-justify">
      {{ t('experience.paragraph') }}
    </p>
    <!-- Companies/Clients -->
    <section class="flex flex-col gap-4" aria-labelledby="companies-clients-title">
      <hgroup>
        <h3 id="companies-clients-title" class="text-xl font-medium">{{ t('experience.companies.title') }}</h3>
        <p class="text-muted-foreground">{{ t('experience.companies.subtitle') }}</p>
      </hgroup>
      <!-- Card Grid -->
      <TooltipProvider :delay-duration="100" :skip-delay-duration="0" :disable-closing-trigger="true">
        <ul class="grid grid-cols-2 place-items-center gap-7 md:grid-cols-4 lg:grid-cols-5" role="list">
          <li v-for="companyOrClient in companiesAndClientsData" :key="companyOrClient.name">
            <Tooltip>
              <TooltipTrigger class="w-full h-full">
                <article
                  :class="
                    cn(
                      'relative flex items-center justify-center',
                      'w-full h-full',
                      'p-4 rounded-lg border border-border border-dashed md:hover:border-emerald-500',
                      'group duration-300 glow overflow-hidden',
                      'bg-noise'
                    )
                  "
                >
                  <!-- Visual Effect -->
                  <div
                    :class="
                      cn(
                        'absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6',
                        'h-14 w-14 md:h-28 md:w-28',
                        'rounded-full',
                        'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
                        'duration-500 group-hover:scale-[2]',
                        'bg-neutral-700'
                      )
                    "
                    aria-hidden="true"
                  />
                  <!-- Image -->
                  <img
                    :src="companyOrClient.imageUrl"
                    :alt="`${companyOrClient.name} logo`"
                    class="h-auto w-16 md:w-24 duration-300 group-hover:scale-105"
                  />
                </article>
              </TooltipTrigger>
              <TooltipContent class="border-dashed">
                <p>{{ companyOrClient.name }}</p>
              </TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </TooltipProvider>
    </section>
    <!-- Absolute Shape -->
    <img
      src="/shapes/circle.webp"
      alt=""
      class="opacity-60 w-16 sm:w-24 h-16 sm:h-24 absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12"
      aria-hidden="true"
    />
  </Section>
</template>
