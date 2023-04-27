/* 使用 handlers.ts 中的代码初始化模拟的 service worker */
import { setupWorker } from 'msw'
import { createHandler } from './handlers'

export const worker = setupWorker(...createHandler())
