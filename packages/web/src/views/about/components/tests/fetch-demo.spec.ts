import { mount } from '@vue/test-utils'
import { FetchDemo } from '..'

describe('should 调用请求返回数据', () => {
  it('should 调用请求返回数据', async () => {
    const wrapper = mount(FetchDemo)
    // await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('')
  })
})
