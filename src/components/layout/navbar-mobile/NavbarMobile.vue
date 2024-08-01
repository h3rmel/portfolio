<script setup lang="ts">
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Icon } from '@iconify/vue';
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button
        variant="outline"
        size="icon-lg"
        class="inline-flex sm:hidden fixed bottom-4 right-4 rounded-full z-[800]"
        aria-label="Navbar sheet opener"
      >
        <Icon icon="lucide:layout-grid" width="28" />
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
            <Icon icon="lucide:phone" width="20" />
            {{ $t('navbar.contact') }}
          </Button>
        </li>
        <li></li>
      </ul>
    </DrawerContent>
  </Drawer>
</template>
