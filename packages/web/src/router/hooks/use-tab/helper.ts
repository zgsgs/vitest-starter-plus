import type { RouteLocationNormalizedLoaded, RouteRecordNormalized } from 'vue-router'

/**
 * 根据vue路由获取tab路由
 * @param route
 */
export function getTabRouteByVueRoute(route: RouteRecordNormalized | RouteLocationNormalizedLoaded) {
  const fullPath = hasFullPath(route) ? route.fullPath : route.path
  const tabRoute: App.GlobalTabRoute = {
    name: route.name,
    fullPath,
    meta: route.meta,
    scrollPosition: {
      left: 0,
      top: 0,
    },
  }
  /**
 * 判断路由是否有fullPath属性
 * @param route 路由
 */
  function hasFullPath(
    route: RouteRecordNormalized | RouteLocationNormalizedLoaded,
  ): route is RouteLocationNormalizedLoaded {
    return Boolean((route as RouteLocationNormalizedLoaded).fullPath)
  }
  return tabRoute
}
