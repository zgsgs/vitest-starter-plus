import { permuteAPalindrome } from './permuteAPalindrome'

describe('test permuteAPalindrome', () => {
  it('input = "a"', () => {
    expect(permuteAPalindrome('a')).toBeTruthy()
  })

  it('input = "aa"', () => {
    expect(permuteAPalindrome('aa')).toBeTruthy()
  })

  it('input = "aaa"', () => {
    expect(permuteAPalindrome('aaa')).toBeTruthy()
  })

  it('input = "baa"', () => {
    expect(permuteAPalindrome('baa')).toBeTruthy()
  })

  it('input = "aab"', () => {
    expect(permuteAPalindrome('aab')).toBeTruthy()
  })

  it('input = "baabcd"', () => {
    expect(permuteAPalindrome('baabcd')).toBeFalsy()
  })

  it('input = "racecars"', () => {
    expect(permuteAPalindrome('racecars')).toBeFalsy()
  })

  it('input = "abcdefghba"', () => {
    expect(permuteAPalindrome('abcdefghba')).toBeFalsy()
  })

  it('input is an empty string', () => {
    expect(permuteAPalindrome('')).toBeTruthy()
  })
})
