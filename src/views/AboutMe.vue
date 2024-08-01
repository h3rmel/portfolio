<script setup lang="ts">
import { GradientBackground } from '@/components/visual/gradient-background';
import { Card, CardHeader, CardDescription, CardContent, CardTitle, CardFooter } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';
</script>

<template>
  <section
    class="relative flex h-[100vh] w-full items-center justify-center overflow-hidden border-b border-dashed border-border"
  >
    <GradientBackground />
    <Card class="z-10 w-full sm:w-[560px]" aria-label="About me card">
      <CardHeader class="flex flex-row items-center justify-between">
        <hgroup class="flex flex-col">
          <CardDescription>{{ $t('about_me.hello') }}</CardDescription>
          <CardTitle class="text-2xl font-medium leading-none tracking-tight">Isaac "Hermel" Reginato</CardTitle>
        </hgroup>
        <img src="/profile.webp" alt="Isaac Hermel's profile picture" class="w-[72px] rounded-full" />
      </CardHeader>
      <CardContent>
        <p class="text-justify">{{ $t('about_me.content') }}</p>
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
    <ScrollIndicator className="absolute bottom-4 left-[50%] translate-x-[-50%]" />
  </section>
</template>
