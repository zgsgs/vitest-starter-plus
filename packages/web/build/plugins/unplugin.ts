import type { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import { usePath } from '../config'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv
  const { localIconPath, typesPath } = usePath()

  /** 本地svg图标集合名称 */
  const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, '')

  return [
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
      dts: `${typesPath}/components.d.ts`,
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [
        IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFFIX }),
      ],
    }),
    AutoImport({
      dts: `${typesPath}/auto-imports.d.ts`,
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        // 'pinia',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }) as PluginOption,
  ]
}
