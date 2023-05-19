declare namespace AuthRoute {
  /** 根路由路径 */
  type RootRoutePath = '/';

  /** 捕获无效路由的路由路径 */
  type NotFoundRoutePath = '/:pathMatch(.*)*';

  type RootRoute = PageRoute.RootRoute

  type NotFoundRouteKey = PageRoute.NotFoundRouteKey

  type RouteKey = PageRoute.RouteKey

  type AllRouteKey = RouteKey | RootRoute | NotFoundRouteKey

  /** 路由路径 */
  type RoutePath<K extends AllRouteKey = AllRouteKey> = AuthRouteUtils.GetRoutePath<K>

  /**
  * 路由布局组件
  * - basic 基础布局（具有公共部分的布局）
  * - blank 空白布局
  * - multi 多级路由布局（三级或三级以上，除一级和最后一级路由，其余采用该路由）
  * - self 使用自身的布局（常作为最后一级路由的布局）
  */
  type RouteComponentType = 'basic' | 'blank' | 'multi' | 'self'

    /** 路由描述 */
    interface RouteMate<K extends AuthRoute.RoutePath> {
    /** 路由标题（可用来做 document.title 或者菜单名称 */
    title: string;
    /** 路由的动态路径（应用在需要动态路径的页面，需要将 path 添加进泛型参数） */
    dynamicPath?: AuthRouteUtils.GetRoutePath<K>;
    /** 作为单级路由的父级路由布局组件 */
    singleLayout?: Extract<RouteComponentType, 'basic'|'blank'>;
    /** 需要登录权限 */
    requiresAuth?: boolean;
    /**
     * 哪些类型的用户有权限才能访问的路由(空的话则表示不需要权限)
     * @description 后端动态路由数据不需要该属性，直接由后端根据用户角色返回对应权限的路由数据
     */
    permissions?: Auth.RoleType[];
    /** 缓存页面 */
    keepAlive?: boolean;
    /** 菜单和面包屑对应的图标 */
    icon?: string;
    /** 使用本地svg作为的菜单和面包屑对应的图标(assets/svg-icon文件夹的的svg文件名) */
    localIcon?: string;
    /** 是否在菜单中隐藏(一些列表、表格的详情页面需要通过参数跳转，所以不能显示在菜单中) */
    hide?: boolean;
    /** 外链链接 */
    href?: string;
    /** 是否支持多个tab页签(默认一个，即相同name的路由会被替换) */
    multiTab?: boolean;
    /** 路由顺序，可用于菜单的排序 */
    order?: number;
    /** 当前路由需要选中的菜单项(用于跳转至不在左侧菜单显示的路由且需要高亮某个菜单的情况) */
    activeMenu?: RouteKey;
    /** 表示是否是多级路由的中间级路由(用于转换路由数据时筛选多级路由的标识，定义路由时不用填写) */
    multi?: boolean;
    /** 是否固定在tab卡不可关闭  */
    affix?: boolean;
  }

  type Route<K extends AllRouteKey = AllRouteKey> = K extends AllRouteKey
    ? {
        /** 路由名称(路由唯一标识) */
        name: K;
        /** 路由路径 */
        path: AuthRouteUtils.GetRoutePath<K>;
        /** 路由重定向 */
        redirect?: AuthRouteUtils.GetRoutePath;
        /**
         * 路由组件
         * - basic: 基础布局，具有公共部分的布局
         * - blank: 空白布局
         * - multi: 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
         * - self: 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
         */
        component?: RouteComponentType;
        /** 子路由 */
        children?: Route[];
        /** 路由描述 */
        meta: RouteMeta<RoutePath<K>>;
      } & Omit<import('vue-router').RouteRecordRaw, 'name' | 'path' | 'redirect' | 'component' | 'children' | 'meta'>
    : never;

  /** 前端导入的路由模块 */
  type RouteModule = Record<string, { default: Route }>;
}

/** 路由工具 */
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
    ? AuthRoute.RootRoutePath
    : K extends AuthRoute.NotFoundRouteKey
      ? AuthRoute.NotFoundRoutePath
      :KeyToPath<K>
  : never
}
