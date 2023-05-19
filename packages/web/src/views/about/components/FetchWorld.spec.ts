import { mount } from '@vue/test-utils'
import { FetchWorld } from '.'

describe('should 调用请求返回数据', () => {
  it('should 调用请求返回数据', async () => {
    // given
    const wrapper = mount(FetchWorld)
    // when
    await wrapper.find('button').trigger('click')
    // then
    expect(wrapper.text()).toContain('')
  })
})
