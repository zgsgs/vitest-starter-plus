import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home页面',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('@/views/about/index.vue'),
  },
  {
    path: '/test',
    name: '测试页面',
    component: () => import('@/views/about/index.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
