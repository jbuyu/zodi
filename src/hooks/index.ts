import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TypeOf, z } from "zod";

// type Post = {
//   userId: string
// id: string,
//   title: string,
//   body: string
//   // name: string
// }


//post
const Post = z.object({
  userId: z.number(), //corceion
  // id: z.number(),
  title: z.string().max(100),
  body: z.string(),
  // name: z.string(),
})

type Post = z.infer<typeof Post>


//post
const User = z.object({
  id: z.number(),
  name: z.string().min(2),
  username: z.string(),
  email: z.string().email(),
})

type User = z.infer<typeof User>




export const useGetPost = () => {
  //runtime parsing
  return useQuery({
    queryKey: ['Posts'], queryFn: async (): Promise<Post> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      const parsedPost = Post.parse(response?.data)
      return parsedPost;
    }
  })
}



export const useGetPosts = () => {
  //runtime parsing
  return useQuery({
    queryKey: ['Users'], queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const parsedPost = Post.parse(response?.data)
      return response.data;
    }
  })
}