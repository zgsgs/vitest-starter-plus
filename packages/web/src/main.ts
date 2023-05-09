import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupAssets } from './plugins'
import SvgIcon from '~virtual/svg-component'

async function setupApp() {
  setupAssets()
  const app = createApp(App)

  app.use(router)

  app.component(SvgIcon.name, SvgIcon)

  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('../mocks')
    worker.start()
  }

  app.mount('#app')
}

setupApp()
