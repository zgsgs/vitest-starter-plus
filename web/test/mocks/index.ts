/* 使用 handlers.ts 中的代码初始化模拟的 service worker */
import { setupServer } from 'msw/node'
import { createHandler } from '../../mocks/handlers'

export const mocker = setupServer(...createHandler('http://localhost/api'))
