import axios from 'config/axios'

const api = {
  sendMessage,
}

async function sendMessage(username, message) {
  try {
    const res = await axios.post('/', { username, message })
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}

export default api
