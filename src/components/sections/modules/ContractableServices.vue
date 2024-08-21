<script setup lang="ts">
import { Section } from '@/components/layout';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
  <Section :title="t('contractable_services.title')" :subtitle="t('contractable_services.subtitle')">
    <ul class="flex flex-col gap-8 sm:grid sm:grid-cols-2" role="list">
      <li v-for="contractableService in CONTRACTABLE_SERVICES_DATA" :key="contractableService.name">
        <Card class="glow group h-full w-full" :visual-effect="true">
          <CardHeader>
            <CardTitle
              :id="`service-title-${contractableService.name}`"
              class="tracking-wide duration-300 group-hover:text-emerald-500"
            >
              {{ t(`contractable_services.services.${contractableService.name}`) }}
            </CardTitle>
            <CardDescription :id="`service-desc-${contractableService.name}`">
              {{ t(`contractable_services.services.${contractableService.desc}`) }}
            </CardDescription>
          </CardHeader>
        </Card>
      </li>
    </ul>
  </Section>
</template>
