<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const { t, locale } = useI18n();

const languages = [
  { value: 'pt-BR', label: 'Português', flag: '/languages/pt-BR.png', alt: 'Bandeira do Brasil' },
  { value: 'en-US', label: 'English', flag: '/languages/en-US.png', alt: 'Bandeira dos Estados Unidos' }
];

const changeLanguage = (value: string) => {
  locale.value = value;
};
</script>

<template>
  <ToggleGroup
    type="single"
    :model-value="locale"
    @update:model-value="(value) => changeLanguage(value[0])"
    aria-label="Selecionar idioma"
  >
    <ToggleGroupItem
      v-for="lang in languages"
      :key="lang.value"
      :value="lang.value"
      :aria-label="t('language.select', { lang: lang.label })"
      :pressed="locale === lang.value"
    >
      <img :src="lang.flag" :alt="lang.alt" class="object-fit w-6" aria-hidden="true" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
