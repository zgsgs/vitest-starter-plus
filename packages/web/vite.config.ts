import { defineConfig } from 'vite'
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
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3600,
      open: true,
      proxy: createViteProxy(viteEnv),
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
