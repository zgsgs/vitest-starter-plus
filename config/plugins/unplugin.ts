import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { getSrcPath } from '../utils'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv

  const srcPath = getSrcPath()
  const localIconPath = `${srcPath}/assets/svg-icon`

  /** 本地svg图标集合名称 */
  const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, '')

  return [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath, svg =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '),
        ),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    Components({
      dts: 'types/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [
        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFFIX }),
      ],
    }),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }),
  ]
}
