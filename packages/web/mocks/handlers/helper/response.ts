export interface createResponseType {
  code?: Http.CustomStatusCode
  data?: unknown | null
  msg?: string
}
export function createResponse(params: createResponseType) {
  const { code = 0, data = null, msg = '' } = params

  return {
    code,
    data,
    msg,
  }
}
