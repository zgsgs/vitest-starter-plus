export function likes(names: string[]) {
  const templates = [
    'no one likes this',
    '{0} likes this',
    '{0} and {1} like this',
    '{0}, {1} and {2} like this',
  ][names.length] || '{0}, {1} and {n} others like this'

  return templates.replace(/{(\d+|n)}/g, (_, n) => {
    return n === 'n' ? `${names.length - 2}` : names[parseInt(n, 10)]
  })
}
