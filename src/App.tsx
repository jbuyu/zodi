import { Heading, VStack } from '@chakra-ui/react'
import './App.css'
import Posts from './components/Users'
import Users from './components/Post'
import Form from './components/Form'

function App() {

  return (
    <VStack spacing={8} className="App">
      <Heading>Zod</Heading>
      <Users />
      {/* <Posts /> */}
      {/* <Form /> */}
    </VStack>
  )
}
export default App
