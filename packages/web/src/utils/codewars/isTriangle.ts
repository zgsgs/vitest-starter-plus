export function isTriangle(a: number, b: number, c: number) {
  const max = Math.max(a, b, c)
  return ([a, b, c].reduce((acc, num) => acc + num, 0) - max) > max
}
