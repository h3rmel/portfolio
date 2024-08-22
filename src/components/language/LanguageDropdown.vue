<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const { t, locale } = useI18n();

const countryName: { [key: string]: string } = {
  'pt-BR': 'Brasil',
  'en-US': 'Estados Unidos'
};

const changeLanguage = (newLocale: string) => {
  locale.value = newLocale;
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="gap-2 bg-transparent px-5" aria-label="Selecionar idioma">
        <img
          :src="`/languages/${$i18n.locale}.png`"
          :alt="`${countryName[$i18n.locale]}'s flag`"
          class="object-fit w-6"
          aria-hidden="true"
        />
        {{ locale }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        class="flex gap-2"
        @click="changeLanguage('pt-BR')"
        :aria-label="t('language.select', { lang: 'Português' })"
      >
        <img src="/languages/pt-BR.png" alt="Bandeira do Brasil" class="object-fit w-6" aria-hidden="true" /> BR
      </DropdownMenuItem>
      <DropdownMenuItem
        class="flex gap-2"
        @click="changeLanguage('en-US')"
        :aria-label="t('language.select', { lang: 'Inglês' })"
      >
        <img src="/languages/en-US.png" alt="United State's flag" class="object-fit w-6" aria-hidden="true" /> EN
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
