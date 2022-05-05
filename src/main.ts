import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router/index'
import { createPinia } from 'pinia'
import { setupPlugins } from './plugins'
import '@/style/global.scss'

function bootstrap() {
  const app = createApp(App)

  // app.use(router)
  setupRouter(app)
  setupPlugins(app)

  app.use(createPinia())

  router.isReady()
  app.mount('#app')
}

bootstrap()
