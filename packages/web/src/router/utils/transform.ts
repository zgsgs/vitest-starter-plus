import type { RouteRecordRaw } from 'vue-router'
import { getLayoutComponent, getViewComponent } from './component'

/** 将权限路由转换成vue路由
 * @param routes - 权限路由
 * @description 所有多级路由都会被转换成二级路由
 */
export function transformAuthRouteToVueRoutes(routes: AuthRoute.Route[]) {
  return routes.map(route => transformAuthRouteToVueRoute(route)).flat(1)
}

type ComponentAction = Record<AuthRoute.RouteComponentType, () => void>

/** 将单个权限路由转换成vue路由
 * @param route - 单个权限路由
 */
export function transformAuthRouteToVueRoute(route: AuthRoute.Route) {
  const resultRoute: RouteRecordRaw[] = []

  const itemRoute = { ...route } as RouteRecordRaw

  // 动态path
  if (hasDynamicPath(route))
    Object.assign(itemRoute, { path: route.meta.dynamicPath })

  // 外链路由
  if (hasHref(route))
    Object.assign(itemRoute, { component: getViewComponent('404') })

  // 路由组件
  if (hasComponent(route)) {
    const action: ComponentAction = {
      basic() {
        itemRoute.component = getLayoutComponent('basic')
      },
      blank() {
        itemRoute.component = getLayoutComponent('blank')
      },
      multi() {
        // 多级路由一定有子路由
        if (hasChildren(route)) {
          Object.assign(itemRoute, { meta: { ...itemRoute.meta, multi: true } })
          delete itemRoute.component
        }
        else {
          window.console.error('多级路由缺少子路由: ', route)
        }
      },
      self() {
        itemRoute.component = getViewComponent(route.name as AuthRoute.LastDegreeRouteKey)
      },
    }
    try {
      if (route.component)
        action[route.component]()

      else
        window.console.error('路由组件解析失败: ', route)
    }
    catch {
      window.console.error('路由组件解析失败: ', route)
    }
  }

  // 注意：单独路由没有children
  if (isSingleRoute(route)) {
    if (hasChildren(route))
      window.console.error('单独路由不应该有子路由: ', route)

    // 捕获无效路由的需特殊处理
    if (route.name === 'not-found') {
      itemRoute.children = [
        {
          path: '',
          name: route.name,
          component: getViewComponent('not-found'),
        },
      ]
    }
    else {
      const parentPath = `${itemRoute.path}-parent` as AuthRouteUtils.SingleRouteKey

      const layout = route.meta.singleLayout === 'basic' ? getLayoutComponent('basic') : getLayoutComponent('blank')

      const parentRoute: RouteRecordRaw = {
        path: parentPath,
        component: layout,
        redirect: route.path,
        children: [itemRoute],
      }

      return [parentRoute]
    }
  }

  // 子路由
  if (hasChildren(route)) {
    const children = (route.children as AuthRoute.Route[]).map(child => transformAuthRouteToVueRoute(child)).flat()

    // 找出第一个不为多级路由中间级的子路由路径作为重定向路径
    const redirectPath = (children.find(v => !v.meta?.multi)?.path || '/') as AuthRoute.RoutePath

    if (redirectPath === '/')
      window.console.error('该多级路由没有有效的子路径', route)

    if (route.component === 'multi') {
      // 多级路由，将子路由提取出来变成同级
      resultRoute.push(...children)
      delete itemRoute.children
    }
    else {
      itemRoute.children = children
    }
    itemRoute.redirect = redirectPath
  }

  resultRoute.push(itemRoute)

  return resultRoute
}

/** 将权限路由转换成搜索的菜单数据
 * @param routes - 权限路由
 * @param treeMap
 */
export function transformAuthRouteToSearchMenus(routes: AuthRoute.Route[], treeMap: AuthRoute.Route[] = []) {
  if (routes && routes.length === 0)
    return []
  return routes.reduce((acc, cur) => {
    if (!cur.meta?.hide)
      acc.push(cur)

    if (cur.children && cur.children.length > 0)
      transformAuthRouteToSearchMenus(cur.children, treeMap)

    return acc
  }, treeMap)
}

/** 将路由名字转换成路由路径 */
export function transformRouteNameToRoutePath(name: Exclude<AuthRoute.AllRouteKey, 'not-found'>): AuthRoute.RoutePath {
  const rootPath: AuthRoute.RoutePath = '/'
  if (name === 'root')
    return rootPath

  const splitMark = '_'
  const pathSplitMark = '/'
  const path = name.split(splitMark).join(pathSplitMark)

  return (pathSplitMark + path) as AuthRoute.RoutePath
}

/** 将路由路径转换成路由名字 */
export function transformRoutePathToRouteName<K extends AuthRoute.RoutePath>(path: K) {
  if (path === '/')
    return 'root'

  const pathSplitMark = '/'
  const routeSplitMark = '_'

  const name = path.split(pathSplitMark).slice(1).join(routeSplitMark) as AuthRoute.AllRouteKey

  return name
}

/** 是否有外链
 * @param item - 权限路由
 */
function hasHref(item: AuthRoute.Route) {
  return Boolean(item.meta.href)
}

/** 是否有动态路由path
 * @param item - 权限路由
 */
function hasDynamicPath(item: AuthRoute.Route) {
  return Boolean(item.meta.dynamicPath)
}

/** 是否有路由组件
 * @param item - 权限路由
 */
function hasComponent(item: AuthRoute.Route) {
  return Boolean(item.component)
}

/** 是否有子路由
 * @param item - 权限路由
 */
function hasChildren(item: AuthRoute.Route) {
  return Boolean(item.children && item.children.length)
}

/** 是否是单层级路由
 * @param item - 权限路由
 */
function isSingleRoute(item: AuthRoute.Route) {
  return Boolean(item.meta.singleLayout)
}
