declare namespace AuthRoute {

  type RootRoute = PageRoute.RootRoute

  type NotFoundRouteKey = PageRoute.NotFoundRouteKey

  type RouteKey = PageRoute.RouteKey

  type AllRouteKey = RouteKey | RootRoute | NotFoundRouteKey

  /** 路由路径 */
  type RoutePath<K extends AllRouteKey = AllRouteKey> = AuthRouteUtils.GetRoutePath<K>
}

declare namespace AuthRouteUtils {

  /** 路由key层级分割符 */
  type RouteKeySplitMark = '_';

  /** 路由path层级分割符 */
  type RoutePathSplitMark = '/';

  /** 空白字符串 */
  type BlankString = '';

  /* key转换成path */
  type KeyToPath<K extends string> = K extends `${infer _Left}${RouteKeySplitMark}${RouteKeySplitMark}${infer _Right}`
  ? never
  : K extends `${infer Left}${RouteKeySplitMark}${infer Right}`
    ? Left extends BlankString
      ? never
      : Right extends BlankString
        ? never
        : KeyToPath<`${Left}${RoutePathSplitMark}${Right}`>
    : `${RoutePathSplitMark}${K}`

  /* 根据路由key获取路由路径 */
  type GetRoutePath<K extends AuthRoute.AllRouteKey = AuthRoute.AllRouteKey> = K extends AuthRoute.AllRouteKey
  ? K extends AuthRoute.RootRoute
    ? AuthRoute.RootRoute
    : K extends AuthRoute.NotFoundRouteKey
      ? AuthRoute.NotFoundRouteKey
      :KeyToPath<K>
  : never
}
