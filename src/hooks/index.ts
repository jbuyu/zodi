import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Users = {
  userId: string
  id: string,
  title: string,
  body: string
  name: string
}


export const useGetUsers = () => {
  return useQuery({
    queryKey: ['todos'], queryFn: async (): Promise<Users[]> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      return response.data;
    }
  })
}
