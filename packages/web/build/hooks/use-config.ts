export const configEnable = {
  open: 'Y',
  close: 'N',
}

export function useConfig(viteEnv: ImportMetaEnv) {
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === configEnable.open
  const isOpenVisualizer = viteEnv.VITE_VISUALIZER === configEnable.open

  return {
    isOpenProxy,
    isOpenVisualizer,
  }
}
