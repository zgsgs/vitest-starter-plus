/* 定义API逻辑的代码 */
import { rest } from 'msw'

const articles = [
  {
    id: 1,
    title: 'Node.js 日志最佳实践指南',
    content:
            '在开发阶段，无论是日志记录还是调试，都可以很容易地跟踪程序并检测到错误。但是在生产环境中，应该考虑更多关于日志记录的问题，因为这对于应用程序的监视和故障排除非常关键。',
    url: 'https://juejin.cn/post/7017811851345920037',
  },
  {
    id: 2,
    title: 'NodeJs 全栈创建多文件断点续传',
    content:
            '文件上传，算是项目开发中比较常见的需求，本文将展示如何构建一个多文件断点续传组件，可以同时处理多个文件，并可以在出现异常或者网络中断的情况下恢复上传，可以手动暂停和恢复文件的上传。文章内容涉及前端和后端，算是一个小型的全栈项目，项目将使用 NodeJs、Express、Busboy 和 XMLHttpRequest，并使用自己开发的脚手架 generator-norm 来构建项目。',
    url: 'https://juejin.cn/post/7015935144007729189',
  },
  {
    id: 3,
    title: 'Node.js 日志之winston使用指南',
    content:
            'Winston 是强大、灵活的 Node.js 开源日志库之一，理论上， Winston 是一个可以记录所有信息的记录器。这是一个高度直观的工具，易于定制。',
    url: 'https://juejin.cn/post/7018169629176496158',
  },
]

export const handlers = [
  rest.get('/api/articles/:id', (req, res, ctx) => {
    const { id } = req.params
    const data = articles.find(item => item.id === parseInt(id as string, 10))
    if (data)
      return res(ctx.status(200), ctx.json(data))

    else
      return res(ctx.status(500))
  }),
]

export const defaultHandlers = []
