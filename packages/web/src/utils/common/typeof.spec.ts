import { isBoolean, isNull, isNumber, isString, isUndefined } from './typeof'

describe('typeof', () => {
  it('should is number', () => {
    const given = 123
    const result = isNumber(given)
    expect(result).toBeTruthy()
  })
  it('should is string', () => {
    const given = 'text'
    const result = isString(given)
    expect(result).toBeTruthy()
  })
  it('should is boolean', () => {
    const given = false
    const result = isBoolean(given)
    expect(result).toBeTruthy()
  })
  it('should is null', () => {
    const given = null
    const result = isNull(given)
    expect(result).toBeTruthy()
  })
  it('should is undefined', () => {
    const given = undefined
    const result = isUndefined(given)
    expect(result).toBeTruthy()
  })
})
