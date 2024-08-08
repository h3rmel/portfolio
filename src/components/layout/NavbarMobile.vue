<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { PhAt, PhSquaresFour } from '@phosphor-icons/vue';

import { Button, buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { LanguageToggle } from '@/components/language';

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
        aria-label="Navbar sheet opener"
      >
        <PhSquaresFour :size="32" />
      </Button>
    </DrawerTrigger>
    <DrawerContent class="z-[999] p-4 pt-0">
      <DrawerHeader>
        <DrawerTitle>
          {{ $t('navbar.options') }}
        </DrawerTitle>
      </DrawerHeader>
      <!-- Options -->
      <ul class="flex flex-col gap-2">
        <li @click="closeDrawer">
          <RouterLink
            :to="route.path === '/' ? '/contact' : '/'"
            :class="`${buttonVariants({ variant: 'outline', size: 'lg' })} w-full gap-2 `"
          >
            <PhAt v-if="route.path !== '/contact'" :size="20" />
            {{ route.path === '/contact' ? 'Home' : $t('navbar.contact') }}
          </RouterLink>
        </li>
        <li></li>
      </ul>
      <!-- Language -->
      <LanguageToggle />
    </DrawerContent>
  </Drawer>
</template>
