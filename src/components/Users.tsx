import { Box, Text, VStack } from '@chakra-ui/react'
import { useGetPosts } from '../hooks'

export default function Users() {
  const { data, isLoading, isError } = useGetPosts();
  console.log('data', data)
  if (isLoading) {
    <Text>Loading</Text>
  }
  return (
    <VStack>
      {
        <Box>{data?.body}</Box>
      }
    </VStack>
  )
}
