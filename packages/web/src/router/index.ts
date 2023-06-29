import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { transformAuthRouteToVueRoutes } from './utils/transform'
import { constantRoutes } from './modules/_builtin'

const { VITE_HASH_ROUTE = 'N', VITE_BASE_URL } = import.meta.env
const router = createRouter({
  history: VITE_HASH_ROUTE === 'Y' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformAuthRouteToVueRoutes(constantRoutes),
})

export default router
