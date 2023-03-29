import { Heading, VStack } from '@chakra-ui/react'
import './App.css'
import Form from './components/Form'
import Post from './components/Post'
import Users from './components/Users'

function App() {

  return (
    <VStack spacing={8} className="App">
      <Heading>Zod</Heading>
      <Post />
      {/* <Users /> */}
      {/* <Form /> */}
    </VStack>
  )
}
export default App
