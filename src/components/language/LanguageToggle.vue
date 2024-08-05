<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
</script>

<template>
  <ToggleGroup
    type="single"
    :model-value="$i18n.locale"
    @update:model-value="(value) => ($i18n.locale = String(value))"
  >
    <ToggleGroupItem value="pt-BR" aria-label="Toggle pt-BR" :pressed="$i18n.locale === 'pt-BR'">
      <img src="/languages/pt-BR.png" alt="Brazil's flag" class="w-6 object-fit" />
    </ToggleGroupItem>
    <ToggleGroupItem value="en-US" aria-label="Toggle en-US" :pressed="$i18n.locale === 'en-US'">
      <img src="/languages/en-US.png" alt="United States's flag" class="w-6 object-fit" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
