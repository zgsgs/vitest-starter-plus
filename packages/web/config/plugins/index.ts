import type { PluginOption } from 'vite'
import Unocss from '@unocss/vite'
import { configEnable } from '../common'
import unplugin from './unplugin'
import visualizer from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [...unplugin(viteEnv), Unocss()]

  if (viteEnv.VITE_VISUALIZER === configEnable.open)
    plugins.push(visualizer)

  return plugins
}
