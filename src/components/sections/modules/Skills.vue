<script setup lang="ts">
import { Section } from '@/components/layout/section';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { softSkillsData } from '@/data/softSkills';
</script>

<template>
  <Section :title="$t('skills.title')" :subtitle="$t('skills.subtitle')">
    <!-- Hard Skills -->
    <section>
      <hgroup>
        <h3 class="text-xl font-medium">
          {{ $t('skills.hard_skills') }}
        </h3>
        <p class="text-muted-foreground">
          {{ $t('skills.hard_skills_desc') }}
        </p>
      </hgroup>
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
