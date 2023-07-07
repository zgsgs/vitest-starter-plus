import { fetchUserInfo } from '@/service'

interface FetchDemoState {
  data: Auth.UserInfo
}
export function useFetchDemo() {
  const state: FetchDemoState = reactive({
    data: {
      userId: '0',
      userName: '',
      userRole: 'user',
    },
  })

  async function getUserInfo() {
    const { data } = await fetchUserInfo()
    if (data)
      state.data = data
  }

  return {
    ...toRefs(state),
    getUserInfo,
  }
}
