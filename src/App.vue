<script lang="ts" setup>
import { onMounted } from 'vue';
import { Navbar } from './components/layout/navbar';
import { NavbarMobile } from './components/layout/navbar-mobile';

onMounted(function () {
  document.cookie = 'locale=pt-BR';
});
</script>

<template>
  <div class="font-geist">
    <Navbar />
    <NavbarMobile />
  </div>
</template>
