<script setup lang="ts">
import { Section } from '@/components/layout';
</script>
<template>
  <Section :title="$t('portfolio.title')" :subtitle="$t('portfolio.subtitle')">
    <img
      src="/shapes/square.svg"
      class="rotate-45 w-16 sm:w-32 h-16 sm:h-32 absolute -bottom-8 sm:-bottom-16 -right-8 sm:-left-16"
    />
  </Section>
</template>
