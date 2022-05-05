import { store } from '@/utils'
import { RouteLocationNormalized, Router } from 'vue-router'

class Guard {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach((to, from) => {
      const token = store.get('token')?.token

      if (this.isLogin(to, token) === false) {
        return { name: 'login' }
      }
      if (this.isGuest(to, token) === false) {
        return from
      }
    })
  }
  // 是否是游客
  private isGuest(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && !token))
  }
  // 是否登陆
  private isLogin(route: RouteLocationNormalized, token: any) {
    return Boolean(!route.meta.auth || (route.meta.auth && token))
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
