import { useCopy } from '@/hooks'

export interface CopyWorldProps {
  text: string
}

export function useCopyWorld(props: CopyWorldProps) {
  const { copyText, read } = useCopy(props.text)

  const state = reactive({
    text: '',
  })

  async function handleClick() {
    copyText()
    state.text = await read()
  }

  return {
    ...toRefs(state),
    handleClick,
  }
}
