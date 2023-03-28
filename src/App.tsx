import { Heading, VStack } from '@chakra-ui/react'
import './App.css'
import Posts from './components/Posts'
import Users from './components/Users'

function App() {

  return (
    <VStack spacing={8} className="App">
      <Heading>Zod</Heading>
      <Users />
      {/* <Posts /> */}
    </VStack>
  )
}
export default App
