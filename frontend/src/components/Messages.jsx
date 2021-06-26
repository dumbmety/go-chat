import { UnorderedList, ListItem, Text } from '@chakra-ui/react'

function Messages({ messages }) {
  return (
    <UnorderedList flex={1} listStyleType="none">
      {messages.map((message, index) => (
        <ListItem key={index}>
          <Text fontWeight="bold" textTransform="capitalize">
            {message.username}
          </Text>
          <Text>{message.message}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  )
}

export default Messages
