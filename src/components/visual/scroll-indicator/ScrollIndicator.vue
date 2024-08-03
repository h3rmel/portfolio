<script setup lang="ts">
import { cn } from '@/utils/cn';

defineProps({
  orientation: {
    type: String,
    default: 'vertical'
  },
  className: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div
    role="figure"
    aria-label="Scroll indicator"
    :class="
      cn(
        'relative flex rounded-3xl border-2 border-neutral-600',
        orientation === 'vertical' ? 'h-16 w-8 justify-center p-1' : 'h-8 w-16 items-center justify-end p-1',
        className
      )
    "
  >
    <div
      :class="
        cn(
          'h-2 w-2 rounded-full bg-neutral-500 delay-0 duration-1000',
          orientation === 'vertical'
            ? 'animate-out fade-out-0 slide-out-to-bottom-10 repeat-infinite'
            : 'animate-out fade-out-0 slide-out-to-left-10 repeat-infinite'
        )
      "
    />
  </div>
</template>
