<script lang="ts" setup>
import { RouterLink, useRoute } from 'vue-router';

import { LanguageDropdown } from '@/components/language';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/utils/cn';
import { PhAt } from '@phosphor-icons/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const route = useRoute();
</script>

<template>
  <header :class="cn('fixed z-[999] sm:top-4', 'flex w-full items-center justify-center')" role="banner">
    <nav
      :class="
        cn(
          'relative',
          'flex items-center justify-between gap-4',
          'h-16 max-w-3xl w-full',
          'px-4 border-b sm:border border-border border-dashed sm:rounded-md',
          'bg-noise backdrop-blur-md'
        )
      "
      aria-label="Navegação principal"
    >
      <!-- Logo -->
      <section>
        <RouterLink
          to="/"
          class="font-geist text-3xl duration-300 hover:text-emerald-500 font-normal"
          aria-label="Ir para a página inicial"
        >
          <span aria-hidden="true">her</span>
          <span aria-hidden="true" class="-ml-[4px]">mel</span>
        </RouterLink>
      </section>
      <!-- Options -->
      <section class="basis-1/5 sm:flex gap-4 justify-end hidden">
        <RouterLink
          :to="route.path === '/' ? '/contact' : '/'"
          :class="`${buttonVariants({ variant: 'outline', size: 'sm' })} bg-transparent gap-2`"
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
