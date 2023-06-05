export function permuteAPalindrome(input: string) {
  if (!input)
    return true
  const len = input.length
  const isEven = len % 2 === 0
  const charList: string[] = [...new Set(input.split(''))]
  const handle = (s: string) => {
    const reg = new RegExp(s, 'igm')
    const result = input.match(reg)
    if (result)
      return result.length % 2 === 0
    return false
  }
  if (isEven) {
    return charList.every((s) => {
      return handle(s)
    })
  }
  const result = charList.filter((s) => {
    return !handle(s)
  })
  if (result.length === 1)
    return true
  return false
}
