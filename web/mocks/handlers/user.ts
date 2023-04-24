import { rest } from 'msw'

export function userHandler(hostRoot: string) {
  return [
    rest.get(`${hostRoot}/user/info`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({
        id: 1,
        name: 'John Doe',
        email: 'upchh@example.com',
        role: 'admin',
      }))
    }),
  ]
}
