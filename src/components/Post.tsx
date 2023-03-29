import { Box, Text, VStack } from '@chakra-ui/react'
import { useGetPost } from '../hooks'

export default function Post() {
  const fetchedPost = useGetPost();
  console.log('type', typeof (fetchedPost.data?.userId))

  if (fetchedPost.isError) {
    // <Text>{fetchedPost.error.issues[0].name}</Text>
  }

  if (fetchedPost.isLoading) {
    <Text>Loading</Text>
  }
  return (
    <VStack>
      {
        <Box>{fetchedPost.data?.title}</Box>
      }
    </VStack>
  )
}
