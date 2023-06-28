export function useCopy() {
  const state = reactive({
    text: '',
  })

  /**
 * 复制内容到系统剪切板
 * @param {string} value
 */
  async function copy(value: string) {
    if (!navigator.clipboard || !window.isSecureContext) {
      console.error('无法获取 navigator.clipboard 对象')
      return false
    }
    await navigator.clipboard.writeText(value)
    // console.log('复制成功', value)
    return true
  }

  async function read() {
    if (!navigator.clipboard || !window.isSecureContext) {
      console.error('无法获取 navigator.clipboard 对象')
      return ''
    }
    const result = await navigator.clipboard.readText()
    // console.log('读取成功', result)

    state.text = result
    return result
  }

  return {
    ...toRefs(state),
    copy,
    read,
  }
}
