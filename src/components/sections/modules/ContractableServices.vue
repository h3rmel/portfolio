<script setup lang="ts">
import { Section } from '@/components/layout';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
