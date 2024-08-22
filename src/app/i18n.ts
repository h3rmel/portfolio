import { createI18n } from 'vue-i18n';

import EN_US from '@/locales/en-US';
import PT_BR from '@/locales/pt-BR';

const i18n = createI18n({
  legacy: false,
  locale: navigator.language || 'pt-BR',
  messages: {
    'pt-BR': PT_BR,
    'en-US': EN_US
  }
});

export { i18n };
