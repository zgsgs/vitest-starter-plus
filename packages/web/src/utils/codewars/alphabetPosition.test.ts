import { alphabetPosition } from './alphabetPosition'

describe('text alphabetPosition', () => {
  it('input: aaa222age output: 1 1 1 1 7 1', () => {
    expect(alphabetPosition('aaa222aga')).toEqual('1 1 1 1 7 1')
  })
})
