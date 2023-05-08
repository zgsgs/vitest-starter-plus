import type { ProxyOptions } from 'vite'
import { useConfig } from './use-config'

/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, IServiceEnvConfig>
type ProxyType = Record<string, string | ProxyOptions>

export function useProxy() {
  /** 不同请求服务的环境配置 */
  const serviceEnv: ServiceEnv = {
    dev: {
      url: 'http://localhost:8080',
    },
    test: {
      url: 'http://localhost:8081',
    },
    prod: {
      url: 'http://localhost:8082',
    },
  }

  /**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
  function getServiceEnvConfig(env: ImportMetaEnv): ServiceEnvConfigWithProxyPattern {
    const { VITE_SERVICE_ENV = 'dev' } = env

    const config = serviceEnv[VITE_SERVICE_ENV]

    return {
      ...config,
      proxyPattern: '/proxy-pattern',
    }
  }

  /**
 * 设置网络代理
 * @param isOpenProxy - 是否开启代理
 * @param envConfig - env环境配置
 */
  function createViteProxy(viteEnv: ImportMetaEnv) {
    const envConfig = getServiceEnvConfig(viteEnv)
    const { isOpenProxy } = useConfig(viteEnv)

    if (!isOpenProxy)
      return undefined

    const proxy: ProxyType = {
      [envConfig.proxyPattern]: {
        target: envConfig.url,
        changeOrigin: true,
        rewrite: path => path.replace(new RegExp(`^${envConfig.proxyPattern}`), ''),
      },
    }

    return proxy
  }

  return {
    getServiceEnvConfig,
    createViteProxy,
  }
}
