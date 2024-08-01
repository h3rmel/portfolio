<script lang="ts" setup>
import { onMounted } from 'vue';

import { Navbar } from '@/components/layout/navbar';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
import { RouterView } from 'vue-router';

onMounted(function () {
  document.cookie = 'locale=pt-BR';
});
</script>

<template>
  <div class="font-geist">
    <Navbar />
    <NavbarMobile />
    <main class="min-h-screen w-full overflow-hidden">
      <RouterView />
    </main>
  </div>
</template>
