import { HomeView, ContactView } from '@/views';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Isaac "Hermel" Reginato'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
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
