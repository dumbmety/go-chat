import { ChakraProvider, Container } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Pusher from 'pusher-js'

import api from 'api'
import Context from 'context'
import Header from 'components/Header'
import Messages from 'components/Messages'
import SendMessage from 'components/SendMessage'

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('username')
  const allMessages = []

  const handleChangeMessage = value => setMessage(value)
  const handleChangeMessages = value => setMessages(value)
  const handleChangeUsername = value => setUsername(value)

  const handleSendMessage = e => {
    e.preventDefault()
    api.sendMessage(username, message)
    setMessage('')
  }

  useEffect(() => {
    Pusher.logToConsole = true

    const pusher = new Pusher('6f50542e3ef4e98030be', {
      cluster: 'us2',
    })

    const channel = pusher.subscribe('chat')
    channel.bind('message', data => {
      allMessages.push(data)
      setMessages(allMessages)
    })
  }, [])

  return (
    <Context.Provider
      value={{
        handleChangeMessage,
        handleChangeMessages,
        handleChangeUsername,
        handleSendMessage,
        message,
        messages,
        username,
      }}
    >
      <ChakraProvider>
        <Container d="flex" flexDir="column" h="100vh">
          <Header />
          <Messages messages={messages} />
          <SendMessage />
        </Container>
      </ChakraProvider>
    </Context.Provider>
  )
}

export default App
