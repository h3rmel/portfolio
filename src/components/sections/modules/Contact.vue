<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import emailjs from '@emailjs/browser';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { GradientBackground } from '@/components/visual/gradient-background';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast/use-toast';
import { dotEnvs } from '@/utils/dot-envs';

// Equal to 60 seconds
const TIMEOUT_DURATION = 60000;

const { t } = useI18n();

const formData = reactive({
  name: '',
  email: '',
  message: ''
});
const isButtonDisabled = ref(false);

const { toast } = useToast();

async function handleSubmit() {
  isButtonDisabled.value = true;

  try {
    emailjs.send(
      dotEnvs.SERVICE,
      dotEnvs.TEMPLATE,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      {
        publicKey: dotEnvs.EMAILJS_PUBLIC_KEY,
        limitRate: {
          throttle: TIMEOUT_DURATION
        }
      }
    );

    toast({
      title: t('contact.toast_success'),
      description: t('contact.toast_success_desc'),
      duration: 5000
    });

    setTimeout(() => {
      isButtonDisabled.value = false;
    }, TIMEOUT_DURATION);
  } catch (error) {
    toast({
      title: t('contact.toast_error'),
      description: t('contact.toast_error_desc'),
      duration: 5000
    });
  }
}
</script>

<template>
  <section
    class="pt-32 pb-16 sm:p-0 bg-noise relative min-h-screen h-full w-full flex justify-center items-center border-b border-dashed border-border"
  >
    <GradientBackground />
    <Card class="bg-background group max-w-xl">
      <CardHeader>
        <CardTitle class="text-2xl">{{ $t('contact.card_title') }}</CardTitle>
        <CardDescription class="text-wrap">{{ $t('contact.card_subtitle') }}</CardDescription>
      </CardHeader>
      <form @submit.prevent="handleSubmit">
        <CardContent class="flex flex-col gap-4">
          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex flex-col gap-2 w-full">
              <Label for="name">{{ $t('contact.label_name') }}</Label>
              <Input type="text" name="name" id="name" v-model="formData.name" />
            </div>
            <div class="flex flex-col gap-2 w-full">
              <Label for="email">{{ $t('contact.label_email') }}</Label>
              <Input type="email" name="email" id="email" v-model="formData.email" />
            </div>
          </div>
          <div class="flex flex-col gap-2 w-full">
            <Label for="message">
              {{ $t('contact.label_message') }}
            </Label>
            <Textarea name="message" id="message" v-model="formData.message" />
          </div>
        </CardContent>
        <CardFooter>
          <Button :disabled="isButtonDisabled" type="submit" variant="secondary">{{ $t('contact.submit') }}</Button>
        </CardFooter>
      </form>
    </Card>
  </section>
</template>
