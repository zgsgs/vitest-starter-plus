// import { useCopy } from './copy'

describe('copy.ts', () => {
  it('test', () => {
    // eslint-disable-next-line no-console
    console.log(window.navigator, window.isSecureContext)
    expect(typeof window).not.toBe('undefined')
  })
//   it('复制内容到系统剪切板', async () => {
//     const given = 'hello world'
//     const { text, read, copy } = useCopy()
//     await copy(given)
//     const result = await read()
//     expect(result).toBe(given)
//     expect(text.value).toBe(given)
//   })
})
