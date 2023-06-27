import { rest } from 'msw'

export function userHandler(hostRoot: string) {
  const getUserInfo = rest.get(`${hostRoot}/user/info`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'John Doe',
        email: 'upchh@example.com',
        role: 'admin',
      }),
    )
  })

  return [
    getUserInfo,
  ]
}
