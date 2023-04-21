import { mount } from '@vue/test-utils'
import { sleep } from '../test/utils'
import App from './App.vue'

describe('App.vue', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.log(11)
  })
  it('should render success', async () => {
    // given
    const wrapper = mount(App)
    // when
    await sleep(200)

    const text = wrapper.text()
    // then
    expect(text).contain('Vite + Vue + TS')
  })

  it('should 复制按钮是否存在', async () => {
    // given
    const wrapper = mount(App)
    const copyBtn = wrapper.find('.copy')
    // when
    // 触发点击事件
    // copyBtn.trigger('click')
    const isExists = copyBtn.exists()

    // then
    // 断言该按钮是否存在
    expect(isExists).toBeTruthy()
  })
  describe('should 测试', () => {
    it('should 测试', async () => {
      // given
      const text = ''
      // when
      const result = text
      // then
      expect(result).toBe(text)
    })
  })
})
