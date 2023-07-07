import { defineConfig, loadEnv } from 'vite'
import { createViteProxy, getServiceEnvConfig, setupVitePlugins, useEnv, usePath } from './build'

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv

  const { isOpenHttpProxy } = useEnv(viteEnv)
  const envConfig = getServiceEnvConfig(viteEnv)

  const { rootPath, setupFilesPath, srcPath } = usePath()
  return {
    plugins: setupVitePlugins(viteEnv),
    resolve: {
      alias: {
        '~': rootPath,
        '@': srcPath,
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3600,
      open: true,
      proxy: createViteProxy(isOpenHttpProxy, envConfig),
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: [setupFilesPath],
    },
  }
})
