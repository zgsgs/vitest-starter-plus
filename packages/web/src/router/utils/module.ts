/**
 * 权限路由排序
 * @param routes - 权限路由
 */
export function sortRoutes(routes: AuthRoute.Route[]) {
  return routes
    .sort((next, pre) => Number(next.meta?.order) - Number(pre.meta?.order))
    .map((i) => {
      if (i.children)
        sortRoutes(i.children)
      return i
    })
}

/**
 * 处理全部导入的路由模块
 * @param modules - 路由模块
 */
export function handleModuleRoutes(modules: AuthRoute.RouteModule) {
  const routes = Object.keys(modules).reduce((acc: AuthRoute.Route[], key) => {
    const item = modules[key].default
    if (item)
      acc.push(item)
    else
      window.console.error(`路由模块解析出错: key = ${key}`)

    return acc
  }, [])

  return sortRoutes(routes)
}
