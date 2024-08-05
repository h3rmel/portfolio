<script setup lang="ts">
import { Section } from '@/components/layout';
</script>

<template>
  <Section :title="$t('experience.title')" :subtitle="$t('experience.subtitle')">
    <!-- Absolute Shape -->
    <img
      src="/shapes/circle.webp"
      class="opacity-60 w-16 sm:w-24 h-16 sm:h-24 absolute -bottom-8 sm:-bottom-12 -right-8 sm:-right-12"
    />
  </Section>
</template>
