import { toRefs } from 'vue'
import { getConstantRouteNames } from './helpers'
import { useAuth, useTab } from '@/router/hooks'
import {
  filterAuthRoutesByUserPermission,
  getCacheRoutes, sortRoutes,
  transformAuthRouteToMenu,
  transformAuthRouteToSearchMenus,
  transformAuthRouteToVueRoute,
  transformAuthRouteToVueRoutes,
  transformRouteNameToRoutePath,
  transformRoutePathToRouteName,
} from '@/router/utils'
import { ROOT_ROUTE, constantRoutes, router, staticRoutes } from '@/router'
import { localStg } from '@/utils'
import { fetchUserRoutes } from '@/service'

interface RouteState {
  /**
   * 权限路由模式:
   * - static - 前端声明的静态
   * - dynamic - 后端返回的动态
   */
  authRouteMode: ImportMetaEnv['VITE_AUTH_ROUTE_MODE']
  /** 是否初始化了权限路由 */
  isInitAuthRoute: boolean
  /** 路由首页name(前端静态路由时生效，后端动态路由该值会被后端返回的值覆盖) */
  routeHomeName: AuthRoute.AllRouteKey
  /** 菜单 */
  menus: App.GlobalMenuOption[]
  /** 搜索的菜单 */
  searchMenus: AuthRoute.Route[]
  /** 缓存的路由名称 */
  cacheRoutes: string[]
}

export function useRoute() {
  const state: RouteState = reactive({
    authRouteMode: import.meta.env.VITE_AUTH_ROUTE_MODE,
    isInitAuthRoute: false,
    routeHomeName: transformRoutePathToRouteName(import.meta.env.VITE_ROUTE_HOME_PATH),
    menus: [],
    searchMenus: [],
    cacheRoutes: [],
  })

  /**
     * 是否是有效的固定路由
     * @param name 路由名称
     */
  function isValidConstantRoute(name: AuthRoute.AllRouteKey) {
    const NOT_FOUND_PAGE_NAME: AuthRoute.NotFoundRouteKey = 'not-found'
    const constantRouteNames = getConstantRouteNames(constantRoutes)
    return constantRouteNames.includes(name) && name !== NOT_FOUND_PAGE_NAME
  }

  /** 初始化权限路由 */
  async function initAuthRoute() {
    if (state.authRouteMode === 'dynamic')
      await initDynamicRoute()

    else
      await initStaticRoute()
  }

  /** 初始化动态路由 */
  async function initDynamicRoute() {
    const { resetAuthStore } = useAuth()
    const { initHomeTab } = useTab()

    const { userId } = localStg.get('userInfo') || {}

    if (!userId)
      throw new Error('userId 不能为空!')

    const { error, data } = await fetchUserRoutes(userId)

    if (!error) {
      state.routeHomeName = data.home
      handleUpdateRootRedirect(data.home)
      handleAuthRoute(sortRoutes(data.routes))

      initHomeTab(data.home, router)

      state.isInitAuthRoute = true
    }
    else {
      resetAuthStore()
    }
  }
  /** 初始化静态路由 */
  async function initStaticRoute() {
    const { initHomeTab } = useTab()
    const { userInfo } = useAuth()

    const routes = filterAuthRoutesByUserPermission(staticRoutes, userInfo.value.userRole)
    handleAuthRoute(routes)

    initHomeTab(state.routeHomeName, router)

    state.isInitAuthRoute = true
  }
  /** 处理权限路由
   * @param routes - 权限路由
   */
  function handleAuthRoute(routes: AuthRoute.Route[]) {
    (state.menus as App.GlobalMenuOption[]) = transformAuthRouteToMenu(routes)
    state.searchMenus = transformAuthRouteToSearchMenus(routes)

    const vueRoutes = transformAuthRouteToVueRoutes(routes)

    vueRoutes.forEach((route) => {
      router.addRoute(route)
    })

    state.cacheRoutes = getCacheRoutes(vueRoutes)
  }
  function resetRouteStore() {

  }
  /** 动态路由模式下：更新根路由的重定向 */
  function handleUpdateRootRedirect(routeKey: AuthRoute.AllRouteKey) {
    if (routeKey === 'root' || routeKey === 'not-found')
      throw new Error('routeKey的值不能为root或者not-found')

    const rootRoute: AuthRoute.Route = { ...ROOT_ROUTE, redirect: transformRouteNameToRoutePath(routeKey) }
    const rootRouteName: AuthRoute.AllRouteKey = 'root'
    router.removeRoute(rootRouteName)
    const rootVueRoute = transformAuthRouteToVueRoute(rootRoute)[0]
    router.addRoute(rootVueRoute)
  }

  return {
    ...toRefs(state),
    isValidConstantRoute,
    initAuthRoute,
    resetRouteStore,
  }
}
