import { mount } from '@vue/test-utils'
import { sleep } from '../../../test/utils'
import About from './index.vue'

describe('about.vue', () => {
  it('should render success', async () => {
    // given
    const wrapper = mount(About)
    // when
    await sleep(200)
    const text = wrapper.text()
    // then
    expect(text).contain('Vite + Vue + TS + Docker + MSW + Vitest')
    // expect(text).toMatchInlineSnapshot('""')
  })

  it('should 存在复制按钮', async () => {
    // given
    const wrapper = mount(About)
    const copyBtn = wrapper.find('.copy')
    // when
    const isExists = copyBtn.exists()

    // then
    // 断言该按钮是否存在
    expect(isExists).toBeTruthy()
  })
})
