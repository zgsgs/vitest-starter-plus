import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import { configEnable, createViteProxy, getRootDir, getServiceEnvConfig, getSrcPath, getTestPath, setupVitePlugins } from './config'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv

  const rootPath = getRootDir()
  const srcPath = getSrcPath()

  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === configEnable.open
  const envConfig = getServiceEnvConfig(viteEnv)

  return {
    plugins: setupVitePlugins(viteEnv),
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
      proxy: createViteProxy(isOpenProxy, envConfig),
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      // 运行在每个测试文件前面
      setupFiles: [getTestPath('./test/setupFiles/index.ts')],
    },
  }
})
