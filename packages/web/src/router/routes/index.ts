/** 根路由 */
export const ROOT_ROUTE: AuthRoute.Route = {
  name: import.meta.env.VITE_ROUTE_ROOT_NAME,
  path: '/',
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
  meta: {
    title: 'Root',
  },
}

export const constantRoute: AuthRoute.Route[] = [

]
