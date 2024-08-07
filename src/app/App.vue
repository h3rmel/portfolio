<script lang="ts" setup>
import { RouterView } from 'vue-router';

import { Navbar, NavbarMobile, Footer } from '@/components/layout';
import { Toaster } from '@/components/ui/toast';
</script>

<template>
  <Navbar />
  <NavbarMobile />
  <main class="min-h-screen w-full overflow-hidden">
    <RouterView />
  </main>
  <Footer />
  <Toaster />
</template>
