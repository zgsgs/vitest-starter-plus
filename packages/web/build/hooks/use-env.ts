import type { ConfigEnv } from 'vite'
import { loadEnv } from 'vite'

export function useEnv(configEnv: ConfigEnv) {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv

  return {
    viteEnv,
  }
}
