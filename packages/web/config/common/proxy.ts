import type { ProxyOptions } from 'vite'

type ProxyType = Record<string, string | ProxyOptions>

/**
 * 设置网络代理
 * @param isOpenProxy - 是否开启代理
 * @param envConfig - env环境配置
 */
export function createViteProxy(isOpenProxy: boolean, envConfig: ServiceEnvConfigWithProxyPattern) {
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
