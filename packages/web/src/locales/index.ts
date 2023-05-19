import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import type { LocaleKey } from './lang'
import messages from './lang'

const i18n = createI18n({
  locale: 'zh-CN',
  fallbackLocale: 'en',
  messages,
  legacy: false,
  globalInjection: true,
})

export function setupI18n(app: App) {
  app.use(i18n)
}

export function t(key: string) {
  return i18n.global.t(key)
}

export function setLocale(locale: LocaleKey) {
  i18n.global.locale = locale
}
