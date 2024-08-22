<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { Section } from '@/components/layout';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { cn } from '@/utils/cn';

import { hardSkillsData, techColorsData } from '@/data/hardSkills';
import { otherHardSkillsData } from '@/data/otherHardSkills';
import { softSkillsData } from '@/data/softSkills';

const { t } = useI18n();
</script>

<template>
  <Section :title="t('skills.title')" :subtitle="t('skills.subtitle')">
    <!-- Hard Skills -->
    <section class="mb-6 flex flex-col gap-4 sm:mb-8" aria-labelledby="hard-skills-title">
      <!-- Header -->
      <hgroup>
        <h3 id="hard-skills-title" class="text-xl font-medium">
          {{ t('skills.hard_skills') }}
        </h3>
        <p class="text-muted-foreground">
          {{ t('skills.hard_skills_desc') }}
        </p>
      </hgroup>
      <!-- Card Grid -->
      <TooltipProvider :delay-duration="100" :skip-delay-duration="0" :disable-closing-trigger="true">
        <ul class="grid grid-cols-3 place-items-center gap-7 sm:gap-16 md:grid-cols-4 lg:grid-cols-5" role="list">
          <li v-for="(hardSkill, index) in hardSkillsData" :key="hardSkill.name">
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
                <TooltipTrigger class="relative h-24 w-24 cursor-default sm:h-48 sm:w-48">
                  <article
                    :class="
                      cn(
                        'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
                        'h-24 w-24 md:h-48 md:w-48',
                        'rounded-lg border border-dashed border-border',
                        'group overflow-hidden duration-300',
                        'bg-noise',
                        techColorsData[hardSkill.colorKey].border,
                        techColorsData[hardSkill.colorKey].glow
                      )
                    "
                  >
                    <!-- Visual Effect -->
                    <div
                      :class="
                        cn(
                          'absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8',
                          'h-20 w-20 md:h-40 md:w-40',
                          'rounded-full',
                          'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
                          'duration-500 group-hover:scale-[2]',
                          techColorsData[hardSkill.colorKey].bg
                        )
                      "
                      aria-hidden="true"
                    />
                    <!-- Hard Skill Logo -->
                    <img
                      :src="hardSkill.imageUrl"
                      :alt="`${hardSkill.name} logo`"
                      :class="
                        cn(
                          'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
                          'duration-300 group-hover:scale-105',
                          'h-auto w-16 md:w-24'
                        )
                      "
                    />
                  </article>
                </TooltipTrigger>
                <TooltipContent class="border-dashed">
                  <p>{{ hardSkill.name }}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </li>
        </ul>
      </TooltipProvider>
      <!-- Other Skills List -->
      <section class="mt-2 flex flex-col gap-2" aria-labelledby="other-hard-skills-title">
        <h4 id="other-hard-skills-title" class="text-lg">
          {{ t('skills.other_hard_skills') }}
        </h4>
        <ul class="flex flex-col gap-1 text-muted-foreground sm:gap-0">
          <li v-for="otherHardSkill in otherHardSkillsData" :key="otherHardSkill">
            {{ t(`skills.other_hard_skills_list.${otherHardSkill}`) }}
          </li>
        </ul>
      </section>
    </section>
    <!-- Soft Skills -->
    <section class="flex flex-col gap-4" aria-labelledby="soft-skills-title">
      <!-- Header -->
      <hgroup>
        <h3 id="soft-skills-title" class="text-xl font-medium">
          {{ t('skills.soft_skills') }}
        </h3>
        <p class="text-muted-foreground">
          {{ t('skills.soft_skills_desc') }}
        </p>
      </hgroup>
      <!-- Card Grid -->
      <ul class="flex flex-col gap-8 sm:grid sm:grid-cols-2" role="list">
        <li v-for="(softSkill, index) in softSkillsData" :key="softSkill.name">
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
            <Card class="glow group flex h-full flex-col items-center p-6 text-center" :visual-effect="true">
              <component
                :is="softSkill.icon"
                :size="48"
                class="duration-300 group-hover:text-emerald-500"
                aria-hidden="true"
              />
              <CardTitle class="py-2">
                {{ t(`skills.soft_skills_list.${softSkill.name}`) }}
              </CardTitle>
              <CardDescription class="sm:w-[80%]">
                {{ t(`skills.soft_skills_list.${softSkill.desc}`) }}
              </CardDescription>
            </Card>
          </div>
        </li>
      </ul>
    </section>
    <!-- Absolute Shape -->
    <img
      src="/shapes/cross.webp"
      alt=""
      class="absolute -bottom-8 -right-8 h-16 w-16 opacity-60 sm:-bottom-12 sm:-right-12 sm:h-24 sm:w-24"
      aria-hidden="true"
    />
  </Section>
</template>
