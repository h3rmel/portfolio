<script lang="ts" setup>
import { onMounted } from 'vue';

import { Navbar } from '@/components/layout/navbar';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
import { AboutMe } from '@/views';

onMounted(function () {
  document.cookie = 'locale=pt-BR';
});
</script>

<template>
  <div class="font-geist">
    <Navbar />
    <NavbarMobile />
    <main class="min-h-screen w-full overflow-hidden">
      <AboutMe />
    </main>
  </div>
</template>
