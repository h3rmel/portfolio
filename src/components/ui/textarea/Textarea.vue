<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { cn } from '@/utils/cn';

import { useVModel } from '@vueuse/core';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  defaultValue?: string | number;
  modelValue?: string | number;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue
});
</script>

<template>
  <textarea
    v-model="modelValue"
    :class="
      cn(
        'flex min-h-20 w-full rounded-md border border-dashed border-input bg-background px-3 py-2 text-sm duration-300 placeholder:text-muted-foreground hover:border-emerald-500 focus:border-emerald-500 focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
  />
</template>
