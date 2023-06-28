export function useFetchDemo() {
  const state = reactive({
    data: '',
  })

  async function fetchInfo(): Promise<void> {
    state.data = await fetch('/user/info').then(res => res.json())
  }

  return {
    ...toRefs(state),
    fetchInfo,
  }
}
