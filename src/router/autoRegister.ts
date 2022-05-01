import { RouteRecordRaw } from 'vue-router'
// {
//   name: '',
//   path: '',
//   component: ''
//   children: []
// }
const files = import.meta.globEager('../layouts/*.vue')
const childrenFiles = import.meta.globEager('../pages/**/*.vue')

function getRoutes() {
  const autoRoutes: RouteRecordRaw[] = []

  Object.entries(files).forEach(([file, module]) => {
    const route = getRoute(file, module)
    route.children = getChildrenRoutes(route)
    autoRoutes.push(route)
  })

  return autoRoutes
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes: RouteRecordRaw[] = []

  Object.entries(childrenFiles).forEach(([file, module]) => {
    if (file.includes(`../pages/${layoutRoute.name as string}`)) {
      const route = getRoute(file, module)
      routes.push(route)
    }
  })
  return routes
}

function getRoute(file: string, module: { [key: string]: any }) {
  // const routeName = file.match(/.+layouts\/(.*?)\.vue/i)
  const routeName = file.replace(/.+layouts\/|.+pages\/|\.vue/gi, '')
  const route: RouteRecordRaw = {
    name: routeName.replace('/', '.'),
    path: `/${routeName}`,
    component: module.default,
  }

  return Object.assign(route, module.default?.route)
}

export default getRoutes()
