import type { AxiosRequestConfig } from 'axios'

export type RequestMethod = 'get' | 'post' | 'put' | 'delete'

export interface RequestParam {
  url: string
  method?: RequestMethod
  data?: any
  axiosConfig?: AxiosRequestConfig
}
export interface RequestResultHook<T = any> {
  data: Ref<T | null>;
  error: Ref<Service.RequestError | null>;
  loading: Ref<boolean>;
  network: Ref<boolean>;
}
