<script lang="ts" setup>
import { RouterView } from 'vue-router';

import { Navbar } from '@/components/layout/navbar';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
</script>

<template>
  <Navbar />
  <NavbarMobile />
  <main class="min-h-screen w-full overflow-hidden">
    <RouterView />
  </main>
</template>
