import Mock, { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: '请求成功',
        data: {
          name: 'vben',
          age: 15,
          hobby: 'lol',
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        message: '请求成功',
        data: {
          token: Mock.mock('@string(10)'),
        },
      }
    },
  },
] as MockMethod[]
