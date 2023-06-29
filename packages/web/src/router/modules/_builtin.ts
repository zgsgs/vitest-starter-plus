import { getLoginModuleRegExp } from '../utils'
import { t } from '@/locales'

/** 根路由: / */
export const ROOT_ROUTE: AuthRoute.Route = {
  name: import.meta.env.VITE_ROUTE_ROOT_NAME,
  path: '/',
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
  meta: {
    title: 'Root',
  },
}

/** 固定的路由 */
export const constantRoutes: AuthRoute.Route[] = [
  ROOT_ROUTE,
  {
    name: 'login',
    path: '/login',
    component: 'self',
    props: (route) => {
      const moduleType = (route.params.module as UnionKey.LoginModule) || 'pwd-login'
      return {
        module: moduleType,
      }
    },
    meta: {
      title: t('message.routes.login.login'),
      dynamicPath: `/login/:module(${getLoginModuleRegExp()})?`,
      singleLayout: 'blank',
    },
  },
  {
    name: 'constant-page',
    path: '/constant-page',
    component: 'self',
    meta: {
      title: t('message.routes.constantPage.constantPage'),
      singleLayout: 'blank',
    },
  },
  {
    name: '403',
    path: '/403',
    component: 'self',
    meta: {
      title: t('message.routes.403.403'),
      singleLayout: 'blank',
    },
  },
  {
    name: '404',
    path: '/404',
    component: 'self',
    meta: {
      title: t('message.routes.404.404'),
      singleLayout: 'blank',
    },
  },
  {
    name: '500',
    path: '/500',
    component: 'self',
    meta: {
      title: t('message.routes.500.500'),
      singleLayout: 'blank',
    },
  },
  // 匹配无效路径的路由
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: 'blank',
    meta: {
      title: t('message.routes.404.404'),
      singleLayout: 'blank',
    },
  },
]
