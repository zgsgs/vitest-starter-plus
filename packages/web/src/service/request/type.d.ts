import type { AxiosRequestConfig } from 'axios'

export type RequestMethod = 'get' | 'post' | 'put' | 'delete'

export interface RequestParam {
  url: string
  method?: RequestMethod
  data?: any
  axiosConfig?: AxiosRequestConfig
}
