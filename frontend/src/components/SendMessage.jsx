import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { useContext } from 'react'
import Context from 'context'

function SendMessage() {
  const context = useContext(Context)
  const { message, handleChangeMessage, handleSendMessage } = context

  return (
    <Box as="form" py={10} onSubmit={handleSendMessage}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type="text"
          value={message}
          placeholder="Write a message..."
          onChange={e => handleChangeMessage(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button size="sm" h="1.75rem" colorScheme="blue">
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default SendMessage
