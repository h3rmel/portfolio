<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const interBubble = ref<HTMLDivElement | null>(null);
let curX = 0;
let curY = 0;
let tgX = 0;
let tgY = 0;

onMounted(() => {
  function move() {
    if (!interBubble.value) return;
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.value.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  }

  function handleMouseMove(event: MouseEvent) {
    tgX = event.clientX;
    tgY = event.clientY;
  }

  window.addEventListener('mousemove', handleMouseMove);
  move();

  // Limpeza do evento ao desmontar o componente
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
});
</script>

<template>
  <div class="gradient-bg z-[-1] h-full w-full" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="g1"></div>
      <div class="g2"></div>
      <div class="g3"></div>
      <div class="g4"></div>
      <div class="g5"></div>
      <div ref="interBubble" class="interactive"></div>
    </div>
  </div>
</template>
