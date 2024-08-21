<script setup lang="ts">
import { GradientBackground } from '@/components/visual/gradient-background';
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section
    class="bg-noise pt-12 sm:p-0 relative flex min-h-screen h-full w-full items-center justify-center overflow-hidden border-b border-dashed border-border"
    aria-labelledby="hero-title"
  >
    <GradientBackground />
    <Card class="glow group bg-background/30 z-10 w-full sm:w-[560px]" aria-labelledby="hero-title">
      <CardHeader class="flex flex-row items-center justify-between">
        <hgroup class="flex flex-col">
          <CardDescription>{{ t('about_me.hello') }}</CardDescription>
          <h1 id="hero-title" class="text-2xl font-medium leading-none tracking-tight">Isaac "Hermel" Reginato</h1>
        </hgroup>
        <img
          src="/profile.webp"
          alt="Foto de perfil de Isaac Hermel"
          class="w-[72px] rounded-full border border-border border-dashed md:group-hover:border-emerald-500 duration-300"
        />
      </CardHeader>
      <CardContent class="duration-300 md:group-hover:border-emerald-500">
        <p class="text-justify text-sm sm:text-base">{{ t('about_me.content') }}</p>
      </CardContent>
      <CardFooter class="inline-flex w-full gap-4">
        <a
          :class="`${buttonVariants({ variant: 'secondary' })} basis-1/2 gap-2 hover:scale-105`"
          href="https://drive.google.com/file/d/12W2b0A431CJ1_yP3oAPTRmvVreB3wt57/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Baixar currículo em português"
        >
          Currículo <img src="/languages/pt-BR.png" alt="Bandeira do Brasil" class="w-5 object-fit" />
        </a>
        <a
          :class="`${buttonVariants({ variant: 'secondary' })} basis-1/2 gap-2 hover:scale-105`"
          href="https://drive.google.com/file/d/1Uay3sXrBHcm872eGvcyhvnn-UtFsPi0m/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download curriculum in English"
        >
          Curriculum <img src="/languages/en-US.png" alt="Bandeira dos Estados Unidos" class="w-5 object-fit" />
        </a>
      </CardFooter>
    </Card>
    <ScrollIndicator className="absolute bottom-3 sm:bottom-4 left-[50%] translate-x-[-50%]" />
  </section>
</template>
