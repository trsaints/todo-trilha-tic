import axios from 'axios'

const mockApi = axios.create({
  baseURL: 'http://localhost:3333',
})

export {mockApi}