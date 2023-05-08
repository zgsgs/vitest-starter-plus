import { defineConfig } from 'vitest/config'
import { setupVitePlugins, useEnv, usePath, useProxy } from './build'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const { rootPath, srcPath, setupFilesPath } = usePath()
  const { viteEnv } = useEnv(configEnv)
  const { createViteProxy } = useProxy()

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
      proxy: createViteProxy(viteEnv),
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      // 运行在每个测试文件前面
      setupFiles: [setupFilesPath],
    },
  }
})
