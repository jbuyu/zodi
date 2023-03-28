import { Box, Text, VStack } from '@chakra-ui/react'
import { useGetPost } from '../hooks'

export default function Users() {
  const fetchedPost = useGetPost();
  console.log('data', fetchedPost)

  if (fetchedPost.isError) {
    // <Text>{fetchedPost.error.issues[0].name}</Text>
  }

  if (fetchedPost.isLoading) {
    <Text>Loading</Text>
  }
  return (
    <VStack>
      {
        <Box>{fetchedPost.data?.userId}</Box>
      }
    </VStack>
  )
}
