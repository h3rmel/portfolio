<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps({
  title: String,
  subtitle: String
});
</script>

<template>
  <section class="border-b border-dashed border-border">
    <section
      :class="
        cn('container relative', 'flex flex-col gap-6 sm:gap-8', 'p-4 sm:p-16 border-dashed border-border sm:border-x')
      "
    >
      <hgroup>
        <h2 class="text-2xl font-medium tracking-wider">{{ title }}</h2>
        <p class="text-muted-foreground">{{ subtitle }}</p>
      </hgroup>
      <slot></slot>
    </section>
  </section>
</template>
