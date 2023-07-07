import { createRequest } from './request'
import { getServiceEnvConfig, useEnv } from '~/build/config'

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env)
const { isOpenHttpProxy } = useEnv()

export const request = createRequest({
  baseURL: isOpenHttpProxy ? proxyPattern : url,
})

export const mockRequest = createRequest({
  baseURL: '/mock',
})
