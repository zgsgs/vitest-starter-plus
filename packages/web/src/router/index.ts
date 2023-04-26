import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import About from '@/views/about/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home页面',
    component: Home,
  },
  {
    path: '/about',
    name: '关于',
    component: About,
  },
  {
    path: '/test',
    name: '测试页面',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
