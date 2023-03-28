import { Box, Text, VStack } from '@chakra-ui/react'
import { useGetUsers } from '../hooks'

export default function Users() {
  const { data, isLoading, isError } = useGetUsers();
  if (isLoading) {
    <Text>Loading</Text>
  }
  return (
    <VStack>
      {
        data?.map((user) => (
          <Box>{user?.name}</Box>
        ))
      }
    </VStack>
  )
}
