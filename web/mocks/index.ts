/* 使用 handlers.ts 中的代码初始化模拟的 service worker */
import { setupWorker } from 'msw'
import { defaultHandlers, handlers } from './handlers'

export const worker = setupWorker(...handlers, ...defaultHandlers)
