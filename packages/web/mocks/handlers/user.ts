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
  const postUserInfo = rest.post<GetUserInfoBody, GetUserInfoResponse>(`${hostRoot}/user/info`,
    async (_req, res, ctx) => {
      const result = users[0]

      return res(
        ctx.json(
          createResponse({
            data: result,
          }),
        ),
      )
    })
  const getUserInfo = rest.get(`${hostRoot}/getUserInfo`, async (_req, res, ctx) => {
    return res(
      ctx.json(
        createResponse({
          data: users[0],
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
    postUserInfo,
    getUserRoutes,
  ]
}
