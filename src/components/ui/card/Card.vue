<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/utils/cn';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
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
    <slot />
  </article>
</template>
