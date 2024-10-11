import { createApp } from 'vue';

import { App, router, i18n } from '@/app';
import { MotionPlugin } from '@vueuse/motion';

import '@/assets/globals.css';

const app = createApp(App);

app.use(router).use(i18n).use(MotionPlugin).mount('#app');
