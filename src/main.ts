import { createApp } from 'vue';

import { App, router, i18n } from '@/app';

import '@/assets/globals.css';

const app = createApp(App);

app.use(i18n).use(router).mount('#app');
