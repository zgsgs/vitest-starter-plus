const open = 'Y'
export function useEnv(viteEnv = import.meta.env) {
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === open
  const isOpenVisualizer = viteEnv.VITE_VISUALIZER === open
  const isOpenCompress = viteEnv.VITE_COMPRESS === open

  return {
    viteEnv,
    isOpenProxy,
    isOpenVisualizer,
    isOpenCompress,
  }
}
