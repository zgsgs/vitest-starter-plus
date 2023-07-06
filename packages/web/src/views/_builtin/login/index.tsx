import { useRouterPush } from '@/hooks'
import { localStg } from '@/utils'

export default defineComponent({
  setup() {
    function login() {
      localStg.set('token', 'token123456789')
      const { toHome } = useRouterPush()
      toHome()
    }
    return () => (
      <button onClick={login}>
        Login
      </button>
    )
  },
})
