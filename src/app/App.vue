<script lang="ts" setup>
import { RouterView } from 'vue-router';

import { Navbar, NavbarMobile } from '@/components/layout';
</script>

<template>
  <Navbar />
  <NavbarMobile />
  <main class="min-h-screen w-full overflow-hidden">
    <RouterView />
  </main>
</template>
