import { mount } from '@vue/test-utils'
import { sleep } from '../../../test/utils'
import About from './index.vue'

describe('about.vue', () => {
  it('should render success', async () => {
    const wrapper = mount(About)
    await sleep(200)
    const text = wrapper.text()
    expect(text).contain('Vite + Vue + TS + Docker + MSW + Vitest')
  })

  it('should 存在复制按钮', async () => {
    const wrapper = mount(About)
    const copyBtn = wrapper.find('.copy')
    const isExists = copyBtn.exists()

    // 断言该按钮是否存在
    expect(isExists).toBeTruthy()
  })
})
