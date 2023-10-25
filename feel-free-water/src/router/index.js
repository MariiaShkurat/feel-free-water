import { createRouter as _createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const routes = [
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

export const createRouter = () =>
  _createRouter({
    history: import.meta.env.SSR ? createMemoryHistory('/') : createWebHistory('/'),
    routes
  })
