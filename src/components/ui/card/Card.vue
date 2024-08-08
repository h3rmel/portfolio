<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/utils/cn';

interface CardProps {
  class?: HTMLAttributes['class'];
  visualEffect?: boolean;
}

const props = withDefaults(defineProps<CardProps>(), {
  class: '',
  visualEffect: false
});
</script>

<template>
  <article
    :class="
      cn(
        'rounded-lg border border-border border-dashed bg-noise backdrop-blur-md text-card-foreground shadow-sm overflow-hidden',
        props.class
      )
    "
  >
    <div
      v-if="props.visualEffect ?? 'false'"
      :class="
        cn(
          'z-[-1] absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8',
          'h-20 w-20 sm:h-40 sm:w-40',
          'rounded-full',
          'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
          'duration-500 group-hover:scale-[4]',
          'bg-neutral-700'
        )
      "
    />
    <slot />
  </article>
</template>
