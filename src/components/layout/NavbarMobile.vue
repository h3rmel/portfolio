<script setup lang="ts">
import { LayoutGrid, AtSign } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { LanguageToggle } from '@/components/language';
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button
        variant="outline-reverse"
        size="icon-lg"
        class="inline-flex sm:hidden fixed bottom-4 right-4 rounded-full z-[800]"
        aria-label="Navbar sheet opener"
      >
        <LayoutGrid class="w-7 h-7" />
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
        <li>
          <Button variant="outline" size="lg" class="w-full gap-2">
            <AtSign class="w-5 h-5" />
            {{ $t('navbar.contact') }}
          </Button>
        </li>
        <li></li>
      </ul>
      <!-- Language -->
      <LanguageToggle />
    </DrawerContent>
  </Drawer>
</template>
