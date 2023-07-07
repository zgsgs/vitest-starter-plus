import type { AxiosRequestConfig } from 'axios'
import { fetchUpdateToken } from '@/service'
import { localStg } from '@/utils'

// import { useAuth } from '@/router/hooks'

/**
 * 刷新token
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
  // const { resetAuth } = useAuth()
  const refreshToken = localStg.get('refreshToken') || ''
  const { data } = await fetchUpdateToken(refreshToken)
  if (data) {
    localStg.set('token', data.token)
    localStg.set('refreshToken', data.refreshToken)

    const config = { ...axiosConfig }
    if (config.headers)
      config.headers.Authorization = data.token

    return config
  }

  // resetAuth()
  return null
}
