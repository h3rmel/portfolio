<script setup lang="ts">
import { cn } from '@/utils/cn';

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: String,
  id: {
    type: String,
    default: () => `section-${Math.random().toString(36).substr(2, 9)}`
  }
});
</script>

<template>
  <section :id="id" class="border-b border-dashed border-border" :aria-labelledby="`${id}-title`">
    <div
      :class="
        cn(
          'container relative',
          'flex flex-col gap-6 sm:gap-8',
          'border-dashed border-border px-4 py-8 sm:border-x sm:p-16'
        )
      "
    >
      <header>
        <h2 :id="`${id}-title`" class="text-2xl font-medium tracking-wider">{{ title }}</h2>
        <p v-if="subtitle" class="text-muted-foreground">{{ subtitle }}</p>
      </header>
      <div role="region" :aria-labelledby="`${id}-title`">
        <slot></slot>
      </div>
    </div>
  </section>
</template>
