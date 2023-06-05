import { tribonacci, tribonacciPlus } from './tribonacci'

describe('tribonacci', () => {
  it('input: [1,1,1], 10 output: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]', () => {
    // when
    const result = tribonacci([1, 1, 1], 10)
    // then
    expect(result).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
  })
  it('input: [0, 0, 0], 10 output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
    // when
    const result = tribonacci([0, 0, 0], 10)
    // then
    expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  })
  it('input: [1, 1, 1], 1 output: [1]', () => {
    const result = tribonacci([1, 1, 1], 1)
    expect(result).toEqual([1])
  })
  it('input: [300, 200, 100], 0 output: []', () => {
    const result = tribonacci([300, 200, 100], 0)
    expect(result).toEqual([])
  })
})

describe('tribonacciPlus', () => {
  it('input: [], 10 output: []', () => {
    // when
    const result = tribonacciPlus([], 10)
    // then
    expect(result).toEqual([])
  })
  it('input: [1], 10 output: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
    // when
    const result = tribonacciPlus([1], 10)
    // then
    expect(result).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
  })
  it('input: [1,1,1], 10 output: [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]', () => {
    // when
    const result = tribonacciPlus([1, 1, 1], 10)
    // then
    expect(result).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
  })
  it('input: [0, 0, 0], 10 output: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]', () => {
    // when
    const result = tribonacciPlus([0, 0, 0], 10)
    // then
    expect(result).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  })
  it('input: [1, 1, 1], 1 output: [1]', () => {
    const result = tribonacciPlus([1, 1, 1], 1)
    expect(result).toEqual([1])
  })
  it('input: [300, 200, 100], 0 output: []', () => {
    const result = tribonacciPlus([300, 200, 100], 0)
    expect(result).toEqual([])
  })
})
