export function useFetchWorld() {
  const state = reactive({
    info: '',
  })

  async function fetchInfo(): Promise<void> {
    state.info = await fetch('/user/info').then(res => res.json())
  }

  return {
    ...toRefs(state),
    fetchInfo,
  }
}
