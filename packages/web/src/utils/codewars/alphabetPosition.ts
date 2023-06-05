export function alphabetPosition(text: string) {
  return text
    .replace(/[^a-z]/ig, '')
    .split('')
    .map(s => s.toLowerCase().charCodeAt(0) - 96)
    .join(' ')
    .trim()
}
