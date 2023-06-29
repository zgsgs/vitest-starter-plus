/* 定义API逻辑的代码 */
import type { DefaultBodyType, MockedRequest, RestHandler } from 'msw'
import { authHandler } from './auth'
import { userHandler } from './user'
import { articleHandler } from './articles'

export function createHandler(hostRoot = ''): RestHandler<MockedRequest<DefaultBodyType>>[] {
  return [
    ...authHandler(hostRoot),
    ...userHandler(hostRoot),
    ...articleHandler(hostRoot),
  ]
}
