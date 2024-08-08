<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/utils/cn';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <h4 :class="cn('text-xl font-semibold leading-none tracking-tight', props.class)">
    <slot />
  </h4>
</template>
