import { mount } from '@vue/test-utils'

export function useSetup(setup: () => void) {
  const Component = {
    render() {},
    setup,
  }
  const wrapper = mount(Component)
  return {
    wrapper,
    router: wrapper.router,
  }
}
