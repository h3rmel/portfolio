<script setup lang="ts">
import { LanguageToggle } from '@/components/language';
import { buttonVariants } from '@/components/ui/button';
import { PhGitFork, PhGithubLogo } from '@phosphor-icons/vue';
</script>

<template>
  <footer class="w-full z-10">
    <!-- Footer -->
    <section class="container flex items-center justify-between sm:p-16 p-4">
      <!-- Social Media Links -->
      <section class="flex gap-4">
        <a
          :class="`${buttonVariants({ variant: 'outline', size: 'icon' })} cursor-pointer`"
          href="https://github.com/h3rmel"
          target="_blank"
          aria-label="Visit my GitHub"
        >
          <PhGithubLogo :size="20" /> </a
        ><a
          :class="`${buttonVariants({ variant: 'outline', size: 'icon' })} cursor-pointer`"
          href="https://github.com/h3rmel/portfolio"
          target="_blank"
          aria-label="Fork me on GitHub"
        >
          <PhGitFork :size="20" />
        </a>
      </section>
      <LanguageToggle />
    </section>
    <!-- Copyright -->
    <section class="flex items-center justify-center border-t border-dashed py-2">
      Isaac "Hermel" Reginato &copy; {{ new Date().getFullYear() }}
    </section>
  </footer>
</template>
