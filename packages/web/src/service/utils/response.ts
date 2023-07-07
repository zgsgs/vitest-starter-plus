import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { RequestMethod } from '../request/type'

/** 获取请求结果 统一响应格式 */
export async function getRequestResponse<T>(params: {
  instance: AxiosInstance
  method: RequestMethod
  url: string
  data?: any
  axiosConfig?: AxiosRequestConfig
}): Promise<Service.RequestResult<T>> {
  const { instance, method, url, data, axiosConfig } = params

  if (['get', 'delete'].includes(method))
    return await instance[method](url, axiosConfig)

  return await instance[method](url, data, axiosConfig)
}
