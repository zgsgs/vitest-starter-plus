import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { App } from 'vue'

// import { transformAuthRouteToVueRoutes, transformRouteNameToRoutePath } from '@/utils'
import { useConfig } from '~/build/hooks'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home页面',
    component: import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    name: '关于',
    component: import('@/views/about/index.vue'),
  },
  {
    path: '/test',
    name: '测试页面',
    component: import('@/views/home/index.vue'),
  },
]

const { isHashRoute } = useConfig()
const { VITE_BASE_URL } = import.meta.env
export const router = createRouter({
  history: isHashRoute ? createWebHashHistory(VITE_BASE_URL) : createWebHistory(VITE_BASE_URL),
  routes,
  // routes: transformAuthRouteToVueRoutes(constantRoutes),
  // scrollBehavior,
})

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
  app.use(router)
  // createRouterGuard(router)
  await router.isReady()
}

/** 路由名称 */
export const routeName = (key: AuthRoute.AllRouteKey) => key
/** 路由路径 */
// export const routePath = (key: Exclude<AuthRoute.AllRouteKey, 'not-found'>) => transformRouteNameToRoutePath(key)

export * from './modules'
