import Axios from 'axios'

export const BASE_URL = 'http://127.0.0.1:8000/api'
// export const BASE_URL = 'https://admin.womensquranicassembly-bh.com/api'


const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
