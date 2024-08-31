<script setup lang="ts">
import { reactive, type Component } from 'vue';
import { useI18n } from 'vue-i18n';

import { buttonVariants } from '@/components/ui/button';
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
  ContextMenuItem,
  ContextMenuSeparator
} from '@/components/ui/context-menu';
import { TooltipProvider, TooltipTrigger, Tooltip, TooltipContent } from '@/components/ui/tooltip';
import { GradientBackground } from '@/components/visual/gradient-background';
import { GridBackground } from '@/components/visual/grid-background';
import { ScrollIndicator } from '@/components/visual/scroll-indicator';

import { cn } from '@/utils/cn';

const { t } = useI18n();

const currentBackground = reactive<{ label: string; component: Component }>({
  label: 'Gradient Background',
  component: GradientBackground
});

const backgrounds: {
  label: string;
  component: Component;
}[] = [
  {
    label: 'Gradient Background',
    component: GradientBackground
  },
  {
    label: 'Grid Background',
    component: GridBackground
  },
  {
    label: 'Isometric Grid Background',
    component: GridBackground
  }
];
function handleBackgroundClick(background: { label: string; component: Component }) {
  currentBackground.label = background.label;
  currentBackground.component = background.component;
}
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger
      aria-labelledby="hero-title"
      class="relative flex h-full min-h-screen w-full items-center justify-center overflow-hidden border-b border-dashed border-border bg-noise pt-12 sm:p-0"
    >
      <component
        :is="currentBackground.component"
        :class="
          cn(currentBackground.label === 'Isometric Grid Background' ? 'isometric-grid-background h-[100rem]' : '')
        "
        aria-hidden="true"
      />
      <div
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :visible="{ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 30, ease: 'easeInOut' } }"
        :delay="100"
        :duration="1000"
      >
        <Card class="glow group z-10 w-full bg-background/30 sm:w-[560px]" aria-labelledby="hero-title">
          <CardHeader class="flex flex-row items-center justify-between">
            <hgroup class="flex flex-col">
              <CardDescription>{{ t('about_me.hello') }}</CardDescription>
              <h1 id="hero-title" class="text-2xl font-medium leading-none tracking-tight">Isaac "Hermel" Reginato</h1>
            </hgroup>
            <img
              src="/profile.webp"
              alt="Foto de perfil de Isaac Hermel"
              class="w-[72px] rounded-full border border-dashed border-border duration-300 md:group-hover:border-emerald-500"
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
              Currículo <img src="/languages/pt-BR.png" alt="Bandeira do Brasil" class="object-fit w-5" />
            </a>
            <a
              :class="`${buttonVariants({ variant: 'secondary' })} basis-1/2 gap-2 hover:scale-105`"
              href="https://drive.google.com/file/d/1Uay3sXrBHcm872eGvcyhvnn-UtFsPi0m/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download curriculum in English"
            >
              Curriculum <img src="/languages/en-US.png" alt="Bandeira dos Estados Unidos" class="object-fit w-5" />
            </a>
          </CardFooter>
        </Card>
      </div>
      <ScrollIndicator className="absolute bottom-3 sm:bottom-4 left-[50%] translate-x-[-50%]" />
      <TooltipProvider :delay-duration="100" :skip-delay-duration="0" :disable-closing-trigger="true">
        <Tooltip>
          <TooltipTrigger as-child>
            <Card class="absolute bottom-4 right-4 px-2 py-1 text-muted-foreground">
              {{ t('about_me.want_to_see_something_cool') }}
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>{{ t('about_me.tooltip_want_to_see') }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel class="px-2" inset>{{ t('about_me.background') }}</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem
        v-for="background in backgrounds"
        :key="background.label"
        :class="cn(currentBackground.label === background.label ? 'bg-accent' : '')"
        @click="handleBackgroundClick(background)"
      >
        {{ background.label }}
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
