<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border border-border border-dashed bg-gradient-to-br from-background/30 to-neutral-800/30 backdrop-blur-md text-card-foreground shadow-sm',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
