export function findMissingLetter(array: string[]): string {
  const list = array.map(s => s.charCodeAt(0))
  const max = Math.max.apply(null, list)
  const min = Math.min.apply(null, list)
  const len = list.length + 1
  const sum = list.reduce((acc, n) => acc + n, 0)

  return String.fromCharCode((max + min) * len / 2 - sum)
}
