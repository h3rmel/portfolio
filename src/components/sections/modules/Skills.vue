<script setup lang="ts">
import { Section } from '@/components/layout';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { hardSkillsData, techColorsData } from '@/data/hardSkills';
import { otherHardSkillsData } from '@/data/otherHardSkills';
import { softSkillsData } from '@/data/softSkills';
import { cn } from '@/utils/cn';
</script>

<template>
  <Section :title="$t('skills.title')" :subtitle="$t('skills.subtitle')">
    <!-- Hard Skills -->
    <section class="flex flex-col gap-4">
      <!-- Header -->
      <hgroup>
        <h3 class="text-xl font-medium">
          {{ $t('skills.hard_skills') }}
        </h3>
        <p class="text-muted-foreground">
          {{ $t('skills.hard_skills_desc') }}
        </p>
      </hgroup>
      <!-- Card Grid -->
      <TooltipProvider :delay-duration="100" :skip-delay-duration="0" :disable-closing-trigger="true">
        <section class="grid grid-cols-3 place-items-center gap-7 md:grid-cols-4 lg:grid-cols-5 sm:gap-16">
          <Tooltip v-for="hardSkill in hardSkillsData" :key="hardSkill.name">
            <TooltipTrigger class="relative h-24 w-24 cursor-default sm:h-48 sm:w-48">
              <article
                :class="
                  cn(
                    'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
                    'h-24 w-24 md:h-48 md:w-48',
                    'border border-dashed border-border rounded-lg',
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
                />
                <!-- Hard Skill Logo -->
                <img
                  :src="hardSkill.imageUrl"
                  :alt="`${hardSkill.name}'s logo'`"
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
        </section>
      </TooltipProvider>
      <!-- Other Skills List -->
      <section class="flex flex-col gap-1 mt-2">
        <h4 class="text-lg">
          {{ $t('skills.other_hard_skills') }}
        </h4>
        <ul class="flex flex-col gap-1 sm:gap-0 text-muted-foreground">
          <li v-for="otherHardSkill in otherHardSkillsData" :key="otherHardSkill">
            - {{ $t(`skills.other_hard_skills_list.${otherHardSkill}`) }}
          </li>
        </ul>
      </section>
    </section>
    <!-- Soft Skills -->
    <section class="flex flex-col gap-4">
      <!-- Header -->
      <hgroup>
        <h3 class="text-xl font-medium">
          {{ $t('skills.soft_skills') }}
        </h3>
        <p class="text-muted-foreground">
          {{ $t('skills.soft_skills_desc') }}
        </p>
      </hgroup>
      <!-- Card Grid -->
      <section class="flex flex-col gap-8 sm:grid sm:grid-cols-2">
        <Card
          v-for="softSkill in softSkillsData"
          :key="softSkill.name"
          class="glow group p-6 flex flex-col items-center text-center"
          :visual-effect="true"
        >
          <component :is="softSkill.icon" :size="48" class="duration-300 group-hover:text-emerald-500" />
          <CardTitle class="py-2">
            {{ $t(`skills.soft_skills_list.${softSkill.name}`) }}
          </CardTitle>
          <CardDescription class="sm:w-[80%]">{{ $t(`skills.soft_skills_list.${softSkill.desc}`) }}</CardDescription>
        </Card>
      </section>
    </section>
    <!-- Absolute Shape -->
    <img
      src="/shapes/cross.webp"
      role="img"
      alt="Cross shape for decoration"
      class="opacity-60 w-16 sm:w-24 h-16 sm:h-24 absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12"
    />
  </Section>
</template>
