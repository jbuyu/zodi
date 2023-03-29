import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useGetUsers } from '../hooks'

export default function Users() {

  const fetchedUsers = useGetUsers()

  console.log('first', fetchedUsers)

  if (fetchedUsers.isLoading) {
    return (
      <Text>Loading</Text>
    )
  }

  return (
    <div>
      {
        fetchedUsers?.data?.map(user => (
          <Box key={user.id}>{user.email}</Box>
        ))
      }
    </div>
  )
}
