import React from 'react'
import { useGetPosts } from '../hooks'

export default function Posts() {

  const fetchedPosts = useGetPosts()

  console.log('first', fetchedPosts)

  return (
    <div>Posts</div>
  )
}
