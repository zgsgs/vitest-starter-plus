declare namespace HTTP{
  type HttpStatusMessage = {
    200: 'Success'
    400: 'Invalid param'
    401: 'Unauthorized'
    403: 'Forbidden'
    404: 'Not found'
    500: 'Internal server error'
    503: 'Service busy'
  }

  type HttpStatusCode = keyof HttpStatusMessage

  type CustomStatusMessage ={
    0: 'ok'
    1001: 'Some custom error msg'
    4001: 'Parameter verification failed'
  }

  type CustomStatusCode = keyof CustomStatusMessage

  type ResponseMessage = HttpStatusMessage & CustomStatusMessage

  type ResponseCode = HttpStatusCode & CustomStatusCode
}
