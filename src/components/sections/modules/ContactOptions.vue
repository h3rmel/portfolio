<script setup lang="ts">
import { Section } from '@/components/layout';
import { Card } from '@/components/ui/card';
import { contactOptions } from '@/data/contactOptions';
import { cn } from '@/utils/cn';
</script>

<template>
  <Section :title="$t('contact.options.title')" :subtitle="$t('contact.options.subtitle')">
    <ul class="flex flex-col sm:flex-row gap-4">
      <li class="basis-1/3" v-for="contact in contactOptions" :key="contact.name">
        <a :href="contact.url" target="_blank">
          <Card
            :class="
              cn(
                'items-center flex flex-col justify-center gap-2',
                'group duration-300',
                'w-full',
                'p-6',
                contact.colors.border,
                contact.colors.glow
              )
            "
          >
            <!-- Visual Effect -->
            <div
              :class="
                cn(
                  'absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8',
                  'h-20 w-20 md:h-40 md:w-40',
                  'rounded-full',
                  'opacity-60 blur-lg sm:opacity-30 sm:blur-xl',
                  'duration-500 group-hover:scale-[2]',
                  contact.colors.bg
                )
              "
            />
            <!-- Icon -->
            <component :is="contact.icon" :size="48" :weight="'light'" :class="`${contact.colors.text} duration-300`" />
            <p :class="`${contact.colors.text} duration-300`">
              {{ contact.name }}
            </p>
          </Card>
        </a>
      </li>
    </ul>
  </Section>
</template>
