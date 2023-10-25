import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/coolers',
      name: 'coolers',
      component: () => import('@/views/Coolers.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/views/Goods.vue')
    }
  ]
})

export default router
