/* 使用 handlers.ts 中的代码初始化模拟的 service worker */
import { setupServer } from 'msw/node'
import { defaultHandlers, handlers } from '../../mocks/handlers'

export const mocker = setupServer(...handlers, ...defaultHandlers)
