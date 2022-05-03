import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailwindcss()
}

// 组件自动注册
function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/form/*.vue')
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string
    app.component(name, components[key].default)
  })
}
