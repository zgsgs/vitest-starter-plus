import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from '~virtual/svg-component'
import './style/style.css'
import 'uno.css'

if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('../mocks')
  worker.start()
}

createApp(App).component(SvgIcon.name, SvgIcon).mount('#app')
