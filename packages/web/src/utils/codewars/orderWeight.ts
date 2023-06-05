export function orderWeight(strng: string): string {
  return strng
    .split(' ')
    .map(str => ({ key: str.split('').reduce((a, b) => a + parseInt(b), 0), val: str }))
    .sort((a, b) => a.key === b.key ? a.val.localeCompare(b.val) : a.key - b.key)
    .map(({ val }) => val)
    .join(' ')
}
