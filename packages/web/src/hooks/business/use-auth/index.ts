import { useRoute } from '../use-route'
import { clearAuthStorage, getToken, getUserInfo } from './helpers'
import { useRouterPush, useTab } from '@/hooks'
import { router } from '@/router'

interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo
  /** 用户token */
  token: string
  /** 登录的加载状态 */
  loginLoading: boolean
}

export function useAuth() {
  const state: AuthState = reactive({
    userInfo: getUserInfo(),
    token: getToken(),
    loginLoading: false,
  })

  /** 是否登录 */
  const isLogin = computed(() => {
    return Boolean(state.token)
  })

  /** 重置auth状态 */
  function resetAuthStore() {
    const { toLogin } = useRouterPush(false)
    const { resetTabStore } = useTab()
    const { resetRouteStore } = useRoute()
    const route = unref(router.currentRoute)

    clearAuthStorage()
    // this.$reset()

    if (route.meta.requiresAuth)
      toLogin()

    nextTick(() => {
      resetTabStore()
      resetRouteStore()
    })
  }

  return {
    ...toRefs(state),
    isLogin,
    resetAuthStore,
  }
}
