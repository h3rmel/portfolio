import { createRouter, createWebHistory } from 'vue-router';

import { HomePage, ContactPage } from '@/pages';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: {
        title: 'Isaac "Hermel" Reginato'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage,
      meta: {
        title: 'Contact | Isaac "Hermel" Reginato'
      }
    }
  ]
});

router.beforeEach((to) => {
  const meta = to.meta;

  document.title = String(meta.title) || 'Isaac "Hermel" Reginato';
});

export { router };
