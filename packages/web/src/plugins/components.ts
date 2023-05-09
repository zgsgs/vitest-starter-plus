import type { App } from 'vue'
import SvgIcon from '~virtual/svg-component'

export function setupComponents(app: App) {
  app.component(SvgIcon.name, SvgIcon)
}
