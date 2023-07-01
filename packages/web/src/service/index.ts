import { toUrlParams } from './helper'
import { t } from '@/locales'

export const api = 'api'

export async function fetchLogin(userName: string, password: string) {
  return await fetch('/api/auth/login', {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: toUrlParams({ userName, password }),
  })
}

export async function fetchUserInfo() {
  return await fetch('/api/users/info', {})
}

export async function fetchUserRoutes(userId: string) {
  interface UserRoutes {
    home: AuthRoute.AllRouteKey
    routes: AuthRoute.Route[]
  }
  const data: UserRoutes = {
    home: 'about',
    routes: [
      {
        name: 'about',
        path: '/about',
        component: 'self',
        meta: {
          title: t('message.routes.about.about'),
          requiresAuth: true,
          keepAlive: true,
          singleLayout: 'basic',
          permissions: ['super', 'admin', 'user'],
          icon: 'fluent:book-information-24-regular',
          order: 10,
        },
      },
    ],
  }
  return Promise.resolve({
    error: null,
    data,
  })
}
