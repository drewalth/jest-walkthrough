import axios from 'axios'
import { apiBaseUrl } from '@/environment'

const config = {
  baseURL: apiBaseUrl
}

const httpClient = axios.create(config)

httpClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export { httpClient }
