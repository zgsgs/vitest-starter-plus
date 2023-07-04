import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupAssets, setupComponents, setupMock } from './plugins'
import { setupI18n } from './locales'

async function setupApp() {
  // import assets: js css
  setupAssets()
  // setup mock: msw
  setupMock()

  const app = createApp(App)
  // vue router
  setupRouter(app)
  // setup other custom components
  setupComponents(app)
  // i18n: vue-i18n
  setupI18n(app)

  app.mount('#app')
}

setupApp()
