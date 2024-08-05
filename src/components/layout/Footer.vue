<script setup lang="ts">
import { LanguageToggle } from '@/components/language';
import { Button, buttonVariants } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="w-full">
    <!-- Footer -->
    <section class="container flex items-center justify-between sm:p-16 p-4">
      <!-- Social Media Links -->
      <section class="flex gap-4">
        <a
          :class="`${buttonVariants({ variant: 'outline', size: 'icon' })} cursor-pointer`"
          href="https://github.com/h3rmel"
          target="_blank"
        >
          <Github /> </a
        ><a
          :class="`${buttonVariants({ variant: 'outline', size: 'icon' })} cursor-pointer`"
          href="https://linkedin.com/in/isaachermel"
          target="_blank"
        >
          <Linkedin />
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
