<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { Section } from '@/components/layout';
import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip } from '@/components/ui/tooltip';

import { cn } from '@/utils/cn';

import { companiesAndClientsData } from '@/data/companiesAndClients';

const { t } = useI18n();
</script>

<template>
  <Section :title="t('experience.title')" :subtitle="t('experience.subtitle')">
    <!-- Paragraph -->
    <p class="mb-6 text-justify text-foreground sm:mb-8">
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
          <li
            v-for="(companyOrClient, index) in companiesAndClientsData"
            :key="companyOrClient.name"
            class="h-full w-full"
          >
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
              <Tooltip>
                <TooltipTrigger class="h-full w-full">
                  <article
                    :class="
                      cn(
                        'relative flex items-center justify-center',
                        'h-full w-full',
                        'rounded-lg border border-dashed border-border p-4 md:hover:border-emerald-500',
                        'glow group overflow-hidden duration-300',
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
                      class="h-auto w-16 duration-300 group-hover:scale-105 md:w-24"
                    />
                  </article>
                </TooltipTrigger>
                <TooltipContent class="border-dashed">
                  <p>{{ companyOrClient.name }}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </li>
        </ul>
      </TooltipProvider>
    </section>
    <!-- Absolute Shape -->
    <img
      src="/shapes/circle.webp"
      alt=""
      class="absolute -bottom-8 -right-8 h-16 w-16 opacity-60 sm:-bottom-12 sm:-right-12 sm:h-24 sm:w-24"
      aria-hidden="true"
    />
  </Section>
</template>
