<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { cn } from '@/utils/cn';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div :class="cn('border-y border-dashed border-border p-6', props.class)">
    <slot />
  </div>
</template>
