import { defineConfig } from '@unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }) as any,
    presetUno(),
  ],
  rules: [],
  shortcuts: [],
  theme: {},
})
