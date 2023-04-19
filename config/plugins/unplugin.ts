import VueMacros from 'unplugin-vue-macros/vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

// import { FileSystemIconLoader } from 'unplugin-icons/loaders'
// import Icons from 'unplugin-icons/vite'
// import { getSrcPath } from '../utils'

export default function unplugin(_viteEnv: ImportMetaEnv) {
  // const { VITE_ICON_PREFFIX, VITE_ICON_LOCAL_PREFFIX } = viteEnv

  // const srcPath = getSrcPath()
  // const localIconPath = `${srcPath}/assets/svg-icon`

  // /** 本地svg图标集合名称 */
  // const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(`${VITE_ICON_PREFFIX}-`, '')

  return [
    VueMacros({
      plugins: {
        vue: Vue(),
        vueJsx: VueJsx(),
      },
    }),
    // Icons({
    //   compiler: 'vue3',
    //   customCollections: {
    //     [collectionName]: FileSystemIconLoader(localIconPath, svg =>
    //       svg.replace(/^<svg\s/, '<svg width="1em" height="1em" '),
    //     ),
    //   },
    //   scale: 1,
    //   defaultClass: 'inline-block',
    // }),
  ]
}
