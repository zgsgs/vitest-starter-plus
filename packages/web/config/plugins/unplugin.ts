import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import SvgComponent from 'unplugin-svg-component/vite'
import type { PluginOption } from 'vite'
import { getSrcPath, getTypesPath } from '../utils'

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv

  const localIconPath = `${getSrcPath()}/assets/svg-icon`
  /** 本地svg图标集合名称 */
  const preserveColorReg = new RegExp(`${VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, '')}`)

  return [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
    SvgComponent({
      iconDir: localIconPath,
      dts: true,
      dtsDir: getTypesPath(),
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
      dts: 'types/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    }),
    AutoImport({
      dts: 'types/auto-imports.d.ts',
      imports: [
        'vue',
        // 'vue-router',
        // 'vue-i18n',
        'vue/macros',
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
