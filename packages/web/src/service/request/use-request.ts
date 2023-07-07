import type { AxiosRequestConfig } from 'axios'
import { getRequestResponse } from '../utils'
import CustomAxiosInstance from './instance'
import type { RequestParam, RequestResultHook } from './type'
import { useBoolean, useLoading } from '@/hooks'

/**
 * 创建hooks请求
 * @param axiosConfig - axios配置
 * @param backendConfig - 后端接口字段配置
 */
export function createHookRequest(axiosConfig: AxiosRequestConfig, backendConfig?: Service.BackendResultConfig) {
  const customInstance = new CustomAxiosInstance(axiosConfig, backendConfig)

  /**
   * hooks请求
   * @param param - 请求参数
   * - url: 请求地址
   * - method: 请求方法(默认get)
   * - data: 请求的body的data
   * - axiosConfig: axios配置
   */
  function useRequest<T>(param: RequestParam): RequestResultHook<T> {
    const { loading, startLoading, endLoading } = useLoading()
    const { bool: network, setBool: setNetwork } = useBoolean(window.navigator.onLine)

    startLoading()
    const data = ref<T | null>(null) as Ref<T | null>
    const error = ref<Service.RequestError | null>(null)

    function handleRequestResult(response: any) {
      const res = response as Service.RequestResult<T>
      data.value = res.data
      error.value = res.error
      endLoading()
      setNetwork(window.navigator.onLine)
    }

    const { url } = param
    const method = param.method || 'get'
    const { instance } = customInstance

    getRequestResponse({ instance, method, url, data: param.data, axiosConfig: param.axiosConfig }).then(
      handleRequestResult,
    )

    return {
      data,
      error,
      loading,
      network,
    }
  }

  /**
   * get请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function get<T>(url: string, config?: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'get', axiosConfig: config })
  }

  /**
   * post请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'post', data, axiosConfig: config })
  }
  /**
   * put请求
   * @param url - 请求地址
   * @param data - 请求的body的data
   * @param config - axios配置
   */
  function put<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'put', data, axiosConfig: config })
  }

  /**
   * delete请求
   * @param url - 请求地址
   * @param config - axios配置
   */
  function handleDelete<T>(url: string, config: AxiosRequestConfig) {
    return useRequest<T>({ url, method: 'delete', axiosConfig: config })
  }

  return {
    get,
    post,
    put,
    delete: handleDelete,
  }
}
