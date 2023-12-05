import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     scrollBehavior(to, from, savedPosition) {
          if (savedPosition) {
               return savedPosition;
          } else {
               return { top: 0 };
          }
     },
     routes: [
          {
               path: '/',
               name: 'Home',
               component: Home,
               meta: {
                    title: 'Adryan Syahputra | Frontend Web Developer',
               },
          },
          {
               path: '/projects',
               name: 'Projects',
               component: Projects,
               meta: {
                    title: 'Adryan Syahputra | Projects',
               },
          },
     ],
});

router.beforeEach((to, from, next) => {
     document.title = `${to.meta.title}`;
     next();
});

export default router;
