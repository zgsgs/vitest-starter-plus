import { useCopy } from './copy'

describe('copy.ts', () => {
  it('复制内容到系统剪切板', async () => {
    // const window = new Window()
    // globalThis.navigator = window.navigator
    const testText = 'hello world'
    const { text, read, copy } = useCopy()
    await copy(testText)
    await read()
    expect(text.value).toBe(testText)
  })
})
