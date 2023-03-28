import { useQuery } from "@chakra-ui/react";
import axios from "axios";

const getUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  return response;
}

export const useGetUsers = () => {
  return useQuery('users', getUsers)
}
