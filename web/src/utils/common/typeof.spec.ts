import { describe, expect, it } from 'vitest'
import { isBoolean, isNull, isNumber, isString, isUndefined } from './typeof'

describe('typeof', () => {
  // 准备数据
  // 调用
  // 验证
  it('should is number', () => {
    expect(isNumber(123)).toBeTruthy()
  })
  it('should is string', () => {
    expect(isString('text')).toBeTruthy()
  })
  it('should is boolean', () => {
    expect(isBoolean(false)).toBeTruthy()
  })
  it('should is null', () => {
    expect(isNull(null)).toBeTruthy()
  })
  it('should is undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy()
  })
})
