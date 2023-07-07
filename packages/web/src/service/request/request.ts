import type { AxiosRequestConfig } from 'axios'
import { getRequestResponse } from '../utils'
import type { RequestParam } from './type'
import CustomAxiosInstance from './instance'

/**
 * 创建请求
 * @param axiosConfig axios配置
 * @param backendConfig 后端接口字段配置
 */
export function createRequest(axiosConfig: AxiosRequestConfig, backendConfig?: Service.BackendResultConfig) {
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig)

  /**
   * 异步promise请求
   * @param param 请求参数
   * url 请求地址
   * method 请求方法(默认get)
   * data 请求的body的data
   * axiosConfig axios配置
   */
  async function asyncRequest<T>(param: RequestParam): Promise<Service.RequestResult<T>> {
    const { instance } = customInstance
    const { url, data, axiosConfig } = param
    const method = param.method || 'get'
    const res = await getRequestResponse<T>({
      instance,
      method,
      url,
      data,
      axiosConfig,
    })

    return res
  }

  /**
   * get请求
   * @param url 请求地址
   * @param axiosConfig axios配置
   */
  function get<T>(url: string, axiosConfig?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'get', axiosConfig })
  }

  /**
   * post请求
   * @param url 请求地址
   * @param data 请求的body的data
   * @param axiosConfig axios配置
   */
  function post<T>(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'post', data, axiosConfig })
  }
  /**
   * put请求
   * @param url 请求地址
   * @param data 请求的body的data
   * @param axiosConfig axios配置
   */
  function put<T>(url: string, data?: any, axiosConfig?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'put', data, axiosConfig })
  }

  /**
   * delete请求
   * @param url 请求地址
   * @param axiosConfig axios配置
   */
  function handleDelete<T>(url: string, axiosConfig?: AxiosRequestConfig) {
    return asyncRequest<T>({ url, method: 'delete', axiosConfig })
  }

  return {
    get,
    post,
    put,
    delete: handleDelete,
  }
}
