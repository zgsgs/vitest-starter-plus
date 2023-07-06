import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { createDynamicRouteGuard } from './dynamic'
import { routeName } from '@/router'
import { localStg } from '@/utils'
import { exeStrategyActions } from '@/router/utils'
import { useAuth } from '@/hooks'

/** 处理路由页面的权限 */
export async function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  // 动态路由
  const permission = await createDynamicRouteGuard(to, from, next)
  if (!permission)
    return

  // 外链路由, 从新标签打开，返回上一个路由
  if (to.meta.href) {
    window.open(to.meta.href)
    next({ path: from.fullPath, replace: true, query: from.query })
    return
  }

  const { userInfo } = useAuth()
  const isLogin = Boolean(localStg.get('token'))
  const permissions = to.meta.permissions || []
  const needLogin = Boolean(to.meta?.requiresAuth) || Boolean(permissions.length)
  const hasPermission = !permissions.length || permissions.includes(userInfo.value.userRole)

  const actions: Common.StrategyAction[] = [
    // 已登录状态跳转登录页，跳转至首页
    [
      isLogin && to.name === routeName('login'),
      () => {
        next({ name: routeName('root') })
      },
    ],
    // 不需要登录权限的页面直接通行
    [
      !needLogin,
      () => {
        next()
      },
    ],
    // 未登录状态进入需要登录权限的页面
    [
      !isLogin && needLogin,
      () => {
        const redirect = to.fullPath
        next({ name: routeName('login'), query: { redirect } })
      },
    ],
    // 登录状态进入需要登录权限的页面，有权限直接通行
    [
      isLogin && needLogin && hasPermission,
      () => {
        next()
      },
    ],
    [
      // 登录状态进入需要登录权限的页面，无权限，重定向到无权限页面
      isLogin && needLogin && !hasPermission,
      () => {
        next({ name: routeName('403') })
      },
    ],
  ]

  exeStrategyActions(actions)
}
