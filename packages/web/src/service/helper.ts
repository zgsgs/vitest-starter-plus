export function toUrlParams<T extends object>(params: T) {
  const list = (Object.keys(params) as Array<keyof T>).reduce((acc: string[], key) => {
    const value: Array<string> = params[key]
    if (Array.isArray(value))
      value.forEach(v => acc.push(`${String(key)}=${v}`))
    else
      acc.push(`${String(key)}=${value}`)

    return acc
  }, [])
  const result = list.join('&')
  return result
}
