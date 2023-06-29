import type { PluginOption } from 'vite'
import unocss from '@unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevtools from 'vite-plugin-vue-devtools'
import { useConfig } from '../hooks'
import unplugin from './unplugin'
import visualizer from './visualizer'
import compress from './compress'

export function setupVitePlugins(viteEnv: ImportMetaEnv): PluginOption[] {
  const plugins: PluginOption[] = [
    vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }) as PluginOption,
    vueJsx() as PluginOption,
    vueDevtools(),
    unocss(),
    ...unplugin(viteEnv),
  ]
  const { isOpenVisualizer } = useConfig(viteEnv)

  if (isOpenVisualizer)
    plugins.push(visualizer as PluginOption)
  if (viteEnv.VITE_COMPRESS === 'Y')
    plugins.push(compress(viteEnv) as PluginOption)

  return plugins
}
