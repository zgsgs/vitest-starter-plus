import type { PluginOption } from 'vite'
import { configEnable } from '../common'
import unocss from './unocss'
import unplugin from './unplugin'
import visualizer from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [...unplugin(viteEnv), unocss]

  if (viteEnv.VITE_VISUALIZER === configEnable.open)
    plugins.push(visualizer)

  return plugins
}
