<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useI18n } from 'vue-i18n';

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
  <ToggleGroup type="single" :model-value="locale" @update:model-value="changeLanguage" aria-label="Selecionar idioma">
    <ToggleGroupItem
      v-for="lang in languages"
      :key="lang.value"
      :value="lang.value"
      :aria-label="t('language.select', { lang: lang.label })"
      :pressed="locale === lang.value"
    >
      <img :src="lang.flag" :alt="lang.alt" class="w-6 object-fit" aria-hidden="true" />
    </ToggleGroupItem>
  </ToggleGroup>
</template>
