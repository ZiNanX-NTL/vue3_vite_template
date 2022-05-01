import Axios from './axios'

const http = new Axios({
  baseURL: 'http://localhost:8000/',
  timeout: 100000,
  headers: {},
})

export { http }
