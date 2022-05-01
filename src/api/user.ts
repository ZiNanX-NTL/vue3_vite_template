import { http } from '@/plugins/axios'
export interface IUser {
  name: string
  age: number
  hobby: string
}
export interface ILogin {
  token: string
}

class userApi {
  getUserInfo() {
    return http.request<IUser>({
      url: '/api/get',
      method: 'get',
    })
  }

  login() {
    return http.request<ILogin>({
      url: '/api/login',
      method: 'get',
    })
  }
}

export default new userApi()
