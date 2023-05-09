export function useConfig(viteEnv: ImportMetaEnv = import.meta.env) {
  const configEnable = {
    open: 'Y',
    close: 'N',
  }
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === configEnable.open
  const isOpenVisualizer = viteEnv.VITE_VISUALIZER === configEnable.open
  const isHashRoute = viteEnv.VITE_HASH_ROUTE ? viteEnv.VITE_HASH_ROUTE === configEnable.open : configEnable.close

  return {
    isOpenProxy,
    isOpenVisualizer,
    isHashRoute,
  }
}
