import { Box, Input } from '@chakra-ui/react'
import { useContext } from 'react'
import Context from 'context'

function Header() {
  const { username, handleChangeUsername } = useContext(Context)

  return (
    <Box py={10}>
      <Input
        variant="outline"
        value={username}
        onChange={e => handleChangeUsername(e.target.value)}
      />
    </Box>
  )
}

export default Header
