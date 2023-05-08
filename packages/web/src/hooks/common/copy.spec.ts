import { useCopy } from './copy'

describe('copy.ts', () => {
  it('复制内容到系统剪切板', async () => {
    // given
    const text = 'hello world'
    // when
    const { read, copyText } = useCopy(text)
    const copyResult = await copyText()
    const readResult = await read()
    // then
    expect(copyResult).toBeTruthy()
    expect(readResult).toBe(text)
  })
})
