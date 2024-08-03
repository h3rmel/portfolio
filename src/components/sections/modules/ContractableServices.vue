<script setup lang="ts">
import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { cn } from '@/utils/cn';

const CONTRACTABLE_SERVICES_DATA: { name: string; desc: string }[] = [
  {
    name: 'landing_pages_creation',
    desc: 'landing_pages_creation_desc'
  },
  {
    name: 'consulting',
    desc: 'consulting_desc'
  },
  {
    name: 'development',
    desc: 'development_desc'
  },
  {
    name: 'seo_otimization',
    desc: 'seo_otimization_desc'
  }
];
</script>

<template>
  <Section :title="$t('contractable_services.title')" :subtitle="$t('contractable_services.subtitle')">
    <div class="flex flex-col gap-8 sm:grid sm:grid-cols-2">
      <Card
        v-for="contractableService in CONTRACTABLE_SERVICES_DATA"
        :key="contractableService.name"
        class="glow group h-full w-full"
      >
        <!-- Visual Effect -->
        <div
          :class="
            cn(
              'absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8',
              'h-20 w-20 sm:h-40 sm:w-40',
              'rounded-full',
              'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
              'duration-500 group-hover:scale-[5]',
              'bg-neutral-700'
            )
          "
        />
        <CardHeader>
          <CardTitle class="tracking-wide duration-300 group-hover:text-emerald-500">{{
            $t(`contractable_services.services.${contractableService.name}`)
          }}</CardTitle>
          <CardDescription>{{ $t(`contractable_services.services.${contractableService.desc}`) }} </CardDescription>
        </CardHeader>
      </Card>
    </div>
  </Section>
</template>
