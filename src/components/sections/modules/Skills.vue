<script setup lang="ts">
import { Section } from '@/components/layout';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { hardSkillsData, techColorsData } from '@/data/hardSkills';
import { otherHardSkillsData } from '@/data/otherHardSkills';
import { softSkillsData } from '@/data/softSkills';
import { cn } from '@/utils/cn';

console.log('hardSkillsData', hardSkillsData);
console.log('techColorsData', techColorsData);
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
      <TooltipProvider :delay-duration="100" :skip-delay-duration="0">
        <section class="grid grid-cols-3 place-items-center gap-7 sm:grid-cols-5 sm:gap-16">
          <Tooltip v-for="hardSkill in hardSkillsData" :key="hardSkill.name">
            <TooltipTrigger class="relative h-24 w-24 cursor-default sm:h-48 sm:w-48">
              <article
                :class="
                  cn(
                    'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
                    'h-24 w-24 sm:h-48 sm:w-48',
                    'border border-dashed border-border rounded-lg',
                    'group overflow-hidden duration-300',
                    techColorsData[hardSkill.colorKey].border,
                    techColorsData[hardSkill.colorKey].glow
                  )
                "
              >
                <div
                  :class="
                    cn(
                      'absolute left-4 top-4 sm:left-0 sm:top-0 group-hover:left-[45%] sm:group-hover:left-[30%]',
                      'h-8 w-8 sm:h-32 sm:w-32',
                      'rounded-full',
                      'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
                      'duration-500',
                      techColorsData[hardSkill.colorKey].bg
                    )
                  "
                />
                <div
                  :class="
                    cn(
                      'absolute bottom-4 right-4 sm:bottom-0 sm:right-0 group-hover:right-[45%] sm:group-hover:right-[30%]',
                      'h-8 w-8 sm:h-32 sm:w-32',
                      'rounded-full',
                      'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
                      'duration-500',
                      techColorsData[hardSkill.colorKey].bg
                    )
                  "
                />
                <img
                  :src="hardSkill.imageUrl"
                  :alt="`${hardSkill.name}'s logo'`"
                  :class="
                    cn(
                      'absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
                      'duration-300 group-hover:scale-105',
                      'h-auto w-16 sm:w-24'
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
      <section class="flex flex-col gap-1">
        <h4 class="text-lg text-muted-foreground">
          {{ $t('skills.other_hard_skills') }}
        </h4>
        <ul class="flex flex-col gap-1 sm:gap-0">
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
      <div class="flex flex-col gap-8 sm:grid sm:grid-cols-2">
        <Card
          v-for="softSkill in softSkillsData"
          :key="softSkill.name"
          class="glow group p-6 flex flex-col items-center text-center"
        >
          <component :is="softSkill.icon" :size="48" class="duration-300 group-hover:text-emerald-500" />
          <CardTitle class="py-2">
            {{ $t(`skills.soft_skills_list.${softSkill.name}`) }}
          </CardTitle>
          <CardDescription class="w-[80%]">{{ $t(`skills.soft_skills_list.${softSkill.desc}`) }}</CardDescription>
        </Card>
      </div>
    </section>
  </Section>
</template>
