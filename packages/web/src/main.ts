import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupAssets, setupComponents, setupMock } from './plugins'

async function setupApp() {
  setupAssets()
  setupMock()
  setupMock()
  const app = createApp(App)
  app.use(router)
  setupComponents(app)

  app.mount('#app')
}

setupApp()
