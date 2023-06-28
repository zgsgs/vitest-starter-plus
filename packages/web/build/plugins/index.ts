import type { PluginOption } from 'vite'
import Unocss from '@unocss/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import { useConfig } from '../hooks'
import unplugin from './unplugin'
import visualizer from './visualizer'

export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
  const plugins = [
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true, // 解构 props
      },
    }),
    VueJsx(),
    ...unplugin(viteEnv),
    Unocss(),
  ]
  const { isOpenVisualizer } = useConfig(viteEnv)

  if (isOpenVisualizer)
    plugins.push(visualizer)

  return plugins
}
