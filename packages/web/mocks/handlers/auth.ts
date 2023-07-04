import { rest } from 'msw'
import { ret } from './helper'
import { auths } from './auth.data'

interface LoginBody {
  username: string
}

interface LoginResponse {
  username: string
  firstName: string
}

export function authHandler(hostRoot: string) {
  const login = rest.post<LoginBody, LoginResponse>(`${hostRoot}/auth/login`,
    async (req, res, ctx) => {
      const { username } = await req.json()
      const data = auths.find(auth => auth.name === username)
      return res(
        ctx.json(ret({
          data,
        })),
      )
    },
  )

  return [
    login,
  ]
}
