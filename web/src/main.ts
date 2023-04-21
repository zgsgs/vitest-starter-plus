import { createApp } from 'vue'
import App from './App.vue'
import SvgIcon from '~virtual/svg-component'
import './style/style.css'
import 'uno.css'

createApp(App).component(SvgIcon.name, SvgIcon).mount('#app')
