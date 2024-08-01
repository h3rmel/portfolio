import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import { App, router } from '@/app';

import '@/assets/globals.css';

import PT_BR from '@/locales/pt-BR.json';
import EN_US from '@/locales/en-US.json';

const i18n = createI18n({
  locale: document.cookie.split('=')[1] || 'pt-BR',
  messages: {
    'pt-BR': PT_BR,
    'en-US': EN_US
  }
});

const app = createApp(App);

app.use(i18n).use(router).mount('#app');
