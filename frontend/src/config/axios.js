import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/messages',
})

export default instance
