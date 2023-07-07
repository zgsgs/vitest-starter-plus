import { rest } from 'msw'
import { createResponse } from './helper'
import { routes, users } from './user.data'

interface GetUserInfoBody {
  userId: number
}
interface GetUserInfoResponse {
  id: string
  name: string
  email: string
  role: string[]
}

interface UserRoutesResponse {
  home: AuthRoute.AllRouteKey | ''
  routes: AuthRoute.Route[] | []
}

export function userHandler(hostRoot: string) {
  const getUserInfo = rest.post<GetUserInfoBody, GetUserInfoResponse>(`${hostRoot}/user/info`,
    async (req, res, ctx) => {
      const { userId } = await req.json()
      const result = users.find(user => user.id === userId)

      return res(
        ctx.json(
          createResponse({
            data: result,
          }),
        ),
      )
    })

  const getUserRoutes = rest.post(`${hostRoot}/user/routes`,
    async (req, res, ctx) => {
      const { userId } = await req.json()
      const result: UserRoutesResponse = userId === 1
        ? {
            home: 'about',
            routes,
          }
        : {
            home: '',
            routes: [],
          }

      return res(
        ctx.json(
          createResponse({
            data: result,
          }),
        ),
      )
    },
  )

  return [
    getUserInfo,
    getUserRoutes,
  ]
}
