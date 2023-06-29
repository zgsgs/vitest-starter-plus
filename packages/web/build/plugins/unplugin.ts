import type { PluginOption } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import SvgComponent from 'unplugin-svg-component/vite'
import { usePath } from '../hooks'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv

  const { typesPath, localIconPath } = usePath()
  /** 本地svg图标集合名称 */
  const preserveColorReg = new RegExp(`${VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, '')}`)

  return [
    SvgComponent({
      iconDir: localIconPath,
      dts: true,
      dtsDir: typesPath,
      svgSpriteDomId: 'my-svg-id',
      prefix: VITE_ICON_PREFFIX,
      componentName: 'SvgIcon',
      preserveColor: preserveColorReg,
      componentStyle: '',
      optimizeOptions: undefined,
      scanStrategy: 'component',
      symbolIdFormatter: (svgName: string, prefix: string): string => {
        const nameArr = svgName.split('/')
        if (prefix)
          nameArr.unshift(prefix)
        return nameArr.join('-').replace(/\.svg$/, '')
      },
    }),
    Components({
      dts: `${typesPath}/components.d.ts`,
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    }),
    AutoImport({
      dts: `${typesPath}/auto-imports.d.ts`,
      imports: [
        'vue',
        // 'vue-router',
        'vue-i18n',
        // '@vueuse/head',
        // '@vueuse/core',
        // 'pinia',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
    }) as PluginOption,
  ]
}
