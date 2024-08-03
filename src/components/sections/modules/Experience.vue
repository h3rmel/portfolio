<script setup lang="ts">
import { Section } from '@/components/layout';
</script>

<template>
  <Section :title="$t('experience.title')" :subtitle="$t('experience.subtitle')">
    <img
      src="/shapes/circle.svg"
      class="w-16 sm:w-32 h-16 sm:h-32 absolute -bottom-8 sm:-bottom-16 -right-8 sm:-right-16"
    />
  </Section>
</template>
