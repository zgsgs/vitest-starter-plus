export function isPangram(string: string) {
  const regexp = /[^a-z]/g
  return [...new Set(string.toLowerCase().replace(regexp, '').split(''))].length === 26
}
