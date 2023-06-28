import { useCopy } from './copy'

describe('copy.ts', () => {
  it('复制内容到系统剪切板', async () => {
    const testText = 'hello world'
    const { text, read, copy } = useCopy()
    copy(testText)
    read()
    expect(text.value).toBe(testText)
  })
})
