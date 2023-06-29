declare namespace Http {
  type HttpStatusCode = 200 | 400 | 401 | 403 | 404 | 500 | 503
  type HttpStatusMessage = Record<HttpStatusCode, string>

  type CustomStatusCode = 0 | 1001 | 4001
  type CustomStatusMessage = Record<CustomStatusCode, string>

  type ResponseMessage = HttpStatusMessage | CustomStatusMessage

  type ResponseCode = HttpStatusCode | CustomStatusCode
}
