<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const countryName: { [key: string]: string } = {
  'pt-BR': 'Brazil',
  'en-US': 'United States'
};
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="sm" class="bg-transparent gap-2 px-5">
        <img
          :src="`/languages/${$i18n.locale}.png`"
          :alt="`${countryName[$i18n.locale]}'s flag`"
          class="w-6 object-fit"
        />
        {{ $i18n.locale }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem class="flex gap-2" @click="$i18n.locale = 'pt-BR'">
        <img src="/languages/pt-BR.png" alt="Brazil's flag" class="w-6 object-fit" /> BR
      </DropdownMenuItem>
      <DropdownMenuItem class="flex gap-2" @click="$i18n.locale = 'en-US'">
        <img src="/languages/en-US.png" alt="United States's flag" class="w-6 object-fit" /> EN
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
