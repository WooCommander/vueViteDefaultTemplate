import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from '@pages'
import { authGuard } from './authGuard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: "Домашняя страница",
        requiresAuth: false, // не требуется авторизация если false
        specialAccess: [1, 2]// тут перечень атрибутов которые дают право перейти на заданный роут
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/pages/AboutPage.vue'),
      meta: {
        title: "About",
        requiresAuth: false,
        specialAccess: [3]
      },
    }
  ]
})
router.beforeEach(authGuard);
export default router
