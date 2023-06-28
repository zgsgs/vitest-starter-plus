import { afterAll, afterEach, beforeAll } from 'vitest'
import { mocker } from '../mocks'
import './global'

beforeAll(() => {
  mocker.listen({
    onUnhandledRequest: 'error',
  })
})

afterAll(() => {
  mocker.close()
})

afterEach(() => {
  // 每次测试后重置处理程序“对测试隔离很重要”
  mocker.resetHandlers()
})
