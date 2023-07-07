export function useFetchDemo() {
  const state = reactive({
    data: '',
  })

  async function fetchInfo(): Promise<void> {
    state.data = await fetch('/user/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ userId: 1 }),
    }).then(res => res.json())
  }

  return {
    ...toRefs(state),
    fetchInfo,
  }
}
