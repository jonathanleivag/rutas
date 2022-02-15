import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes'

createApp(App)
  .use(new Router().excute())
  .mount('#app')
