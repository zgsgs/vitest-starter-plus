import { ExceptionBase } from '@/components'

export default defineComponent({
  setup() {
    return () => (
      <ExceptionBase type="404" />
    )
  },
})
