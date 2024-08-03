<script setup lang="ts">
import { GradientBackground } from '@/components/visual/gradient-background';
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';
</script>

<template>
  <section
    class="relative flex min-h-screen h-full w-full items-center justify-center overflow-hidden border-b border-dashed border-border"
  >
    <GradientBackground />
    <!-- bg-gradient-to-br from-background/30 to-neutral-800/30 -->
    <Card class="glow group z-10 w-full sm:w-[560px]" aria-label="About me card">
      <CardHeader class="flex flex-row items-center justify-between">
        <hgroup class="flex flex-col">
          <CardDescription>{{ $t('about_me.hello') }}</CardDescription>
          <h1 class="text-2xl font-medium leading-none tracking-tight">Isaac "Hermel" Reginato</h1>
        </hgroup>
        <img
          src="/profile.webp"
          alt="Isaac Hermel's profile picture"
          class="w-[72px] rounded-full border border-border border-dashed group-hover:border-emerald-500 duration-300"
        />
      </CardHeader>
      <CardContent class="duration-300 group-hover:border-emerald-500">
        <p class="text-justify text-sm sm:text-base">{{ $t('about_me.content') }}</p>
      </CardContent>
      <CardFooter class="inline-flex w-full gap-4">
        <a
          :class="`${buttonVariants({ variant: 'secondary' })} basis-1/2 gap-2 hover:scale-105`"
          href="https://drive.google.com/file/d/12W2b0A431CJ1_yP3oAPTRmvVreB3wt57/view?usp=sharing"
          target="_blank"
        >
          Curriculo <img src="/languages/pt-BR.png" alt="Brazil's flag" class="w-5 object-fit" />
        </a>
        <a
          :class="`${buttonVariants({ variant: 'secondary' })} basis-1/2 gap-2 hover:scale-105`"
          href="https://drive.google.com/file/d/1Uay3sXrBHcm872eGvcyhvnn-UtFsPi0m/view?usp=sharing"
          target="_blank"
        >
          Curriculum <img src="/languages/en-US.png" alt="United States's flag" class="w-5 object-fit" />
        </a>
      </CardFooter>
    </Card>
    <ScrollIndicator className="absolute bottom-3 sm:bottom-4 left-[50%] translate-x-[-50%]" />
  </section>
</template>
