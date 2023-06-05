export function tribonacci(list: number[], n: number): number[] {
  for (let i = 0; list.length < n; i++) list.push(list[i] + list[i + 1] + list[i + 2])
  return list.slice(0, n)
}
export function tribonacci2([a, b, c]: [number, number, number], n: number): number[] {
  if (n === 0)
    return []
  const next = a + b + c
  n -= 1
  if (n)
    return [a, ...tribonacci([b, c, next], n)]
  return [a]
}

export function tribonacciPlus(list: number[], n: number): number[] {
  const len = list.length
  if (len === 0)
    return []
  for (let i = 0; list.length < n; i++)
    list.push(list.slice(0 - len).reduce((a, b) => a + b, 0))
  return list.slice(0, n)
}
