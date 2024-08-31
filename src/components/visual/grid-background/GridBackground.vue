<script setup lang="ts">
import { cn } from '@/utils/cn';

defineProps({
  className: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div :class="cn('absolute h-full min-h-screen w-full bg-muted/20', className)">
    <div class="absolute inset-0 grid grid-cols-8 gap-1 p-1 sm:grid-cols-16 md:grid-cols-32">
      <div
        v-for="(_, index) in 1200"
        :key="index"
        class="aspect-square bg-background transition-all duration-1000 ease-in-out hover:bg-emerald-500/50 hover:duration-0"
      />
    </div>
  </div>
</template>
