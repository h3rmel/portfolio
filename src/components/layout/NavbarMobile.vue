<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { PhAt, PhSquaresFour } from '@phosphor-icons/vue';

import { Button, buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { LanguageToggle } from '@/components/language';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const route = useRoute();
const isOpen = ref(false);

function closeDrawer() {
  isOpen.value = false;
}
</script>

<template>
  <Drawer v-model:open="isOpen">
    <DrawerTrigger as-child>
      <Button
        variant="outline-reverse"
        size="icon-lg"
        class="inline-flex sm:hidden fixed bottom-4 right-4 rounded-full z-[800]"
        aria-label="Abrir menu de navegação"
      >
        <PhSquaresFour :size="32" aria-hidden="true" />
      </Button>
    </DrawerTrigger>
    <DrawerContent class="z-[999] p-4 pt-0" role="dialog" aria-modal="true">
      <DrawerHeader>
        <DrawerTitle>
          {{ t('navbar.options') }}
        </DrawerTitle>
      </DrawerHeader>
      <!-- Opções -->
      <nav aria-label="Menu de navegação móvel" class="mb-2">
        <ul class="flex flex-col gap-2">
          <li>
            <RouterLink
              :to="route.path === '/' ? '/contact' : '/'"
              :class="`${buttonVariants({ variant: 'outline', size: 'lg' })} w-full gap-2`"
              @click="closeDrawer"
              :aria-label="route.path === '/contact' ? 'Ir para a página inicial' : 'Ir para a página de contato'"
            >
              <PhAt v-if="route.path !== '/contact'" :size="20" aria-hidden="true" />
              {{ route.path === '/contact' ? 'Início' : t('navbar.contact') }}
            </RouterLink>
          </li>
        </ul>
      </nav>
      <!-- Idioma -->
      <LanguageToggle />
    </DrawerContent>
  </Drawer>
</template>
