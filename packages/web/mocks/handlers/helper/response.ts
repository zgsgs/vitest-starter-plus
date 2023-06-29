interface retType {
  code?: HTTP.CustomStatusCode
  data?: unknown | null
  msg?: string
}
export function ret(params: retType) {
  const { code = 0, data = null, msg = '' } = params

  return {
    code,
    data,
    msg,
  }
}
