/* eslint-disable no-console */

export function useCopy(text?: string) {
  /**
 * 复制内容到系统剪切板
 * @param {string} value
 */
  function copy(value: string) {
    if (!navigator.clipboard || !window.isSecureContext) {
      console.error('无法获取 navigator.clipboard 对象')
      return false
    }
    navigator.clipboard.writeText(value).then(() => {
      console.log('复制成功', value)
    })
    return true
  }

  async function read() {
    if (!navigator.clipboard || !window.isSecureContext) {
      console.error('无法获取 navigator.clipboard 对象')
      return false
    }
    const result = await navigator.clipboard.readText()
    console.log('读取成功', result)

    return result
  }
  const copyText = () => text ? copy(text) : null

  return {
    text,
    copyText,
    copy,
    read,
  }
}
