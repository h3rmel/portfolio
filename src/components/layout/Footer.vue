<script setup lang="ts">
import { LanguageToggle } from '@/components/language';
import { buttonVariants } from '@/components/ui/button';

import { PhGitFork, PhGithubLogo } from '@phosphor-icons/vue';
</script>

<template>
  <footer class="z-10 w-full" role="contentinfo">
    <!-- Links e Idioma -->
    <div class="container flex items-center justify-between p-4 sm:p-16">
      <!-- Links de Mídia Social -->
      <nav aria-label="Links de mídia social">
        <ul class="flex gap-4">
          <li>
            <a
              :class="`${buttonVariants({ variant: 'outline', size: 'icon' })} cursor-pointer`"
              href="https://github.com/h3rmel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visite meu GitHub"
            >
              <PhGithubLogo :size="20" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              :class="`${buttonVariants({ variant: 'outline', size: 'icon' })} cursor-pointer`"
              href="https://github.com/h3rmel/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Faça um fork no GitHub"
            >
              <PhGitFork :size="20" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
      <LanguageToggle />
    </div>
    <!-- Direitos Autorais -->
    <div class="flex items-center justify-center border-t border-dashed py-2">
      <p>
        <span>Isaac "Hermel" Reginato &copy; {{ new Date().getFullYear() }}</span>
      </p>
    </div>
  </footer>
</template>
