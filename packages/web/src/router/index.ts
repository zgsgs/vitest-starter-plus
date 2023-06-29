import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { transformAuthRouteToVueRoutes, transformRouteNameToRoutePath } from './utils'
import { constantRoutes } from './modules/_builtin'

const { VITE_HASH_ROUTE = 'N', VITE_BASE_URL } = import.meta.env
const router = createRouter({
  history: VITE_HASH_ROUTE === 'Y' ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes: transformAuthRouteToVueRoutes(constantRoutes),
})

/** 路由名称 */
export const routeName = (key: AuthRoute.AllRouteKey) => key
/** 路由路径 */
export const routePath = (key: Exclude<AuthRoute.AllRouteKey, 'not-found'>) => transformRouteNameToRoutePath(key)

export default router
