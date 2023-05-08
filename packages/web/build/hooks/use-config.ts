export function useConfig(viteEnv: ImportMetaEnv) {
  const configEnable = {
    open: 'Y',
    close: 'N',
  }
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === configEnable.open
  const isOpenVisualizer = viteEnv.VITE_VISUALIZER === configEnable.open

  return {
    isOpenProxy,
    isOpenVisualizer,
  }
}
