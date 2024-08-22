<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { Section } from '@/components/layout';
import { Card } from '@/components/ui/card';

import { cn } from '@/utils/cn';

import { contactOptionsData } from '@/data/contactOptions';

const { t } = useI18n();
</script>

<template>
  <Section :title="t('contact.options.title')" :subtitle="t('contact.options.subtitle')">
    <ul class="flex flex-col gap-4 sm:flex-row">
      <li class="basis-1/3" v-for="(contact, index) in contactOptionsData" :key="contact.name">
        <div
          class="h-full w-full"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 90, damping: 30, ease: 'easeInOut' }
          }"
          :delay="100 * index + 1"
          :duration="1000"
        >
          <a
            :href="contact.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Entre em contato pelo ${contact.name}`"
          >
            <Card
              :class="
                cn(
                  'flex flex-col items-center justify-center gap-2',
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
                aria-hidden="true"
              />
              <!-- Icon -->
              <component
                :is="contact.icon"
                :size="48"
                :weight="'light'"
                :class="`${contact.colors.text} duration-300`"
                aria-hidden="true"
              />
              <p :class="`${contact.colors.text} duration-300`">
                {{ contact.name }}
              </p>
            </Card>
          </a>
        </div>
      </li>
    </ul>
  </Section>
</template>
