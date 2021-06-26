import { createContext } from 'react'

const Context = createContext({
  message: '',
  messages: [],
  username: 'username',

  handleChangeMessage: () => {},
  handleChangeMessages: () => {},
  handleChangeUsername: () => {},
  handleSendMessage: () => {},
})

export default Context
