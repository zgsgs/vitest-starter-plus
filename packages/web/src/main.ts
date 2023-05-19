import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupAssets, setupComponents, setupMock } from './plugins'
import { setupI18n } from './locales'

async function setupApp() {
  setupAssets()
  setupMock()
  setupMock()
  const app = createApp(App)
  app.use(router)
  setupComponents(app)
  setupI18n(app)

  app.mount('#app')
}

setupApp()
