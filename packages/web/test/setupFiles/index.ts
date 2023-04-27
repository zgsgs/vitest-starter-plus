import { afterAll, afterEach, beforeAll } from 'vitest'
import { mocker } from '../mocks'
import './global'

// 配置服务 onUnhandledRequest: 'error' 只要产生了没有相应类型的请求处理，就会发生错误。
// 在所有测试之前启动服务器
beforeAll(() => mocker.listen({ onUnhandledRequest: 'error' }))

// 所有测试后关闭服务器
afterAll(() => mocker.close())

// 每次测试后重置处理程序“对测试隔离很重要”
afterEach(() => mocker.resetHandlers())
