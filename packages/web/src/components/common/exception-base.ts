type ExceptionType = '403' | '404' | '500'

export interface ExceptionBaseProps {
  /** 异常类型 403 404 500 */
  type: ExceptionType
}

export function useExceptionBase() {
  return {
  }
}
