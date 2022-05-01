import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import autoRoutes from './autoRegister'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoRoutes],
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
