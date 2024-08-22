<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/toast/use-toast';
import { GradientBackground } from '@/components/visual/gradient-background';

import emailjs from '@emailjs/browser';

// Equal to 60 seconds
const TIMEOUT_DURATION = 60000;

const { t } = useI18n();

const formData = reactive({
  name: '',
  email: '',
  message: ''
});
const isButtonDisabled = ref(false);
const formRef = ref<HTMLFormElement | null>(null);

const { toast } = useToast();

async function handleSubmit() {
  isButtonDisabled.value = true;

  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        limitRate: {
          throttle: TIMEOUT_DURATION
        }
      }
    );

    toast({
      title: t('contact.toast_success'),
      description: t('contact.toast_success_desc')
    });

    formData.name = '';
    formData.email = '';
    formData.message = '';

    setTimeout(() => {
      isButtonDisabled.value = false;
    }, TIMEOUT_DURATION);

    // Foca no primeiro campo do formulário após o envio bem-sucedido
    if (formRef.value) {
      const firstInput = formRef.value.querySelector('input, textarea') as HTMLElement;
      if (firstInput) firstInput.focus();
    }
  } catch (error) {
    toast({
      title: t('contact.toast_error'),
      description: t('contact.toast_error_desc')
    });
    isButtonDisabled.value = false;
  }
}
</script>

<template>
  <section
    class="relative flex h-full min-h-screen w-full items-center justify-center border-b border-dashed border-border bg-noise pb-16 pt-32 sm:p-0"
    aria-labelledby="contact-title"
  >
    <GradientBackground />
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 90, damping: 30, ease: 'easeInOut' }
      }"
      :delay="100"
      :duration="1000"
    >
      <Card class="group max-w-xl bg-background">
        <CardHeader>
          <CardTitle id="contact-title" class="text-2xl">{{ t('contact.card_title') }}</CardTitle>
          <CardDescription class="text-wrap">{{ t('contact.card_subtitle') }}</CardDescription>
        </CardHeader>
        <form @submit.prevent="handleSubmit" ref="formRef">
          <CardContent class="flex flex-col gap-4">
            <div class="flex flex-col gap-4 sm:flex-row">
              <div class="flex w-full flex-col gap-2">
                <Label for="name">{{ t('contact.label_name') }}</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  v-model="formData.name"
                  required
                  :aria-invalid="formData.name === ''"
                  :aria-describedby="formData.name === '' ? 'name-error' : undefined"
                />
                <span id="name-error" v-if="formData.name === ''" class="sr-only">
                  {{ t('contact.name_required') }}
                </span>
              </div>
              <div class="flex w-full flex-col gap-2">
                <Label for="email">{{ t('contact.label_email') }}</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  v-model="formData.email"
                  required
                  :aria-invalid="formData.email === ''"
                  :aria-describedby="formData.email === '' ? 'email-error' : undefined"
                />
                <span id="email-error" v-if="formData.email === ''" class="sr-only">
                  {{ t('contact.email_required') }}
                </span>
              </div>
            </div>
            <div class="flex w-full flex-col gap-2">
              <Label for="message">
                {{ t('contact.label_message') }}
              </Label>
              <Textarea
                name="message"
                id="message"
                v-model="formData.message"
                required
                :aria-invalid="formData.message === ''"
                :aria-describedby="formData.message === '' ? 'message-error' : undefined"
              />
              <span id="message-error" v-if="formData.message === ''" class="sr-only">
                {{ t('contact.message_required') }}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button :disabled="isButtonDisabled" type="submit" variant="secondary" :aria-busy="isButtonDisabled">
              {{ t('contact.submit') }}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  </section>
</template>
