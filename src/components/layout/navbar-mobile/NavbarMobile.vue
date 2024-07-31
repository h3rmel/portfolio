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
        class="inline-flex sm:hidden fixed bottom-4 right-4 rounded-full"
        aria-label="Navbar sheet opener"
      >
        <Icon icon="ph:squares-four" width="28" />
      </Button>
    </DrawerTrigger>
    <DrawerContent class="z-[999] p-4 pt-0">
      <DrawerHeader>
        <DrawerTitle>
          {{ $t('navbar.explore') }}
        </DrawerTitle>
      </DrawerHeader>
      <!-- Options -->
      <ul class="flex flex-col gap-2">
        <li>
          <Button variant="outline" size="lg" class="w-full gap-2">
            <Icon icon="ph:compass-tool" width="20" />
            <span>{{ $t('navbar.portfolio') }}</span>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="lg" class="w-full gap-2">
            <Icon icon="ph:code" width="20" />
            <span>{{ $t('navbar.hard_skills') }}</span>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="lg" class="w-full gap-2">
            <Icon icon="ph:chat-teardrop" width="20" />
            <span>{{ $t('navbar.soft_skills') }}</span>
          </Button>
        </li>
        <li>
          <Button variant="outline" size="lg" class="w-full gap-2">
            <Icon icon="ph:briefcase" width="20" />
            <span>{{ $t('navbar.contractable_services') }}</span>
          </Button>
        </li>
      </ul>
    </DrawerContent>
  </Drawer>
</template>
