<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { PhAt, PhSquaresFour } from '@phosphor-icons/vue';

import { Button, buttonVariants } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { LanguageToggle } from '@/components/language';

const route = useRoute();

const open = reactive({ value: false });

function toggleOpen() {
  open.value = !open.value;
}
</script>

<template>
  <Drawer :open="open.value">
    <DrawerTrigger as-child>
      <Button
        variant="outline-reverse"
        size="icon-lg"
        class="inline-flex sm:hidden fixed bottom-4 right-4 rounded-full z-[800]"
        aria-label="Navbar sheet opener"
        @click="toggleOpen"
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
        <li @click="toggleOpen">
          <RouterLink
            :to="route.path === '/' ? '/contact' : '/'"
            :class="`${buttonVariants({ variant: 'outline', size: 'sm' })} bg-transparent gap-2`"
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
