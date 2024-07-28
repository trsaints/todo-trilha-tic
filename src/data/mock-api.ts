import axios from 'axios'

const mockApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL_BACKEND ?? 'http://localhost:3333',
})

export {mockApi}