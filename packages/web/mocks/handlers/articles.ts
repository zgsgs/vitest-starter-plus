import { rest } from 'msw'
import { articles } from './articles.data'
import { createResponse } from './helper'

export function articleHandler(hostRoot: string) {
  const getArticles = rest.get(`${hostRoot}/api/articles/:id`, (req, res, ctx) => {
    const { id } = req.params
    const data = articles.find(item => item.id === parseInt(id as string, 10))

    if (!data)
      return res(ctx.status(500))

    return res(
      ctx.json(
        createResponse({
          data,
        }),
      ),
    )
  })

  return [
    getArticles,
  ]
}
