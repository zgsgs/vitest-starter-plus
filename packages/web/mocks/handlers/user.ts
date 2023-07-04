import { rest } from 'msw'
import { ret } from './helper'
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
  home: AuthRoute.AllRouteKey
  routes: AuthRoute.Route[]
}

export function userHandler(hostRoot: string) {
  const getUserInfo = rest.get<GetUserInfoBody, GetUserInfoResponse>(`${hostRoot}/user/info`,
    async (req, res, ctx) => {
      const { userId } = await req.json()
      const data = users.find(user => user.id === userId)

      return res(
        ctx.json(ret({
          data,
        })),
      )
    })

  const getUserRoutes = rest.post(`${hostRoot}/user/routes`,
    async (req, res, ctx) => {
      // const { userId } = await req.json()
      const data: UserRoutesResponse = {
        home: 'about',
        routes,
      }
      return res(ctx.json(ret({
        data,
      })),
      )
    },
  )

  return [
    getUserInfo,
    getUserRoutes,
  ]
}
