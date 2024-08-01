<script lang="ts" setup>
import { LanguageToggle } from '@/components/language';
import { cn } from '@/lib/utils';
import { NavbarLinks } from '../navbar-links';
import { Button } from '@/components/ui/button';
</script>

<template>
  <header :class="cn('fixed z-[999] sm:top-4', 'flex w-full items-center justify-center')">
    <nav
      :class="
        cn(
          'relative',
          'flex items-center justify-between gap-4',
          'h-16 max-w-3xl w-full',
          'px-4 border-b sm:border border-border border-dashed sm:rounded-md',
          'bg-gradient-to-br from-background/30 to-neutral-800/30 backdrop-blur-md'
        )
      "
    >
      <!-- Logo -->
      <section class="basis-1/3">
        <Button variant="logo" class="p-0 duration-300 relative">
          <span>her</span>
          <span class="-ml-1">mel</span>
        </Button>
      </section>
      <!-- Links -->
      <section class="basis-1/3 sm:flex justify-center hidden">
        <NavbarLinks />
      </section>
      <!-- Options -->
      <section class="basis-1/3 sm:flex justify-end hidden">
        <LanguageToggle />
      </section>
    </nav>
  </header>
</template>
