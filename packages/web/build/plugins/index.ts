import type { PluginOption } from 'vite'
import Unocss from '@unocss/vite'
import { useConfig } from '../hooks'
import unplugin from './unplugin'
import visualizer from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [...unplugin(viteEnv), Unocss()]
  const { isOpenVisualizer } = useConfig(viteEnv)

  if (isOpenVisualizer)
    plugins.push(visualizer)

  return plugins
}
