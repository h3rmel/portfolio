<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute } from 'vue-router';

import { LanguageDropdown } from '@/components/language';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/utils/cn';

import { PhAt } from '@phosphor-icons/vue';

const { t } = useI18n();

const route = useRoute();
</script>

<template>
  <header :class="cn('fixed z-[999]', 'flex w-full items-center justify-center')" role="banner">
    <nav
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :visible-once="{
        opacity: 1,
        y: 16,
        transition: { type: 'spring', stiffness: 90, damping: 30, ease: 'easeInOut' }
      }"
      :delay="100"
      :duration="1000"
      :class="
        cn(
          'relative',
          'flex items-center justify-between gap-4',
          'h-16 w-full max-w-3xl',
          'border-b border-t-0 border-dashed border-border px-4 sm:rounded-md sm:border',
          'bg-noise backdrop-blur-md'
        )
      "
      aria-label="Navegação principal"
    >
      <!-- Logo -->
      <section>
        <RouterLink
          to="/"
          class="font-geist text-3xl font-normal duration-300 hover:text-emerald-500"
          aria-label="Ir para a página inicial"
        >
          <span aria-hidden="true">her</span>
          <span aria-hidden="true" class="-ml-[4px]">mel</span>
        </RouterLink>
      </section>
      <!-- Options -->
      <section class="hidden basis-1/5 justify-end gap-4 sm:flex">
        <RouterLink
          :to="route.path === '/' ? '/contact' : '/'"
          :class="`${buttonVariants({ variant: 'outline', size: 'sm' })} gap-2 bg-transparent`"
          :aria-label="route.path === '/contact' ? 'Ir para a página inicial' : 'Ir para a página de contato'"
        >
          <PhAt v-if="route.path !== '/contact'" :size="20" aria-hidden="true" />
          {{ route.path === '/contact' ? 'Home' : t('navbar.contact') }}
        </RouterLink>
        <LanguageDropdown />
      </section>
    </nav>
  </header>
</template>
