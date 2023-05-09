import { createApp } from 'vue'
import App from './App.vue'
import { setupAssets, setupComponents, setupMock } from './plugins'

async function setupApp() {
  setupAssets()
  setupMock()
  const app = createApp(App)
  setupComponents(app)

  app.mount('#app')
}

setupApp()
