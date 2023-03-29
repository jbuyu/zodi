import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TypeOf, z } from "zod";

// type Post = {
//   userId: string
//   id: string,
//   title: string,
//   body: string
//   name: string
// }


//zod post
const Post = z.object({
  // userId: z.number().transform(val => `${val} mil`), //
  id: z.number(),
  userId: z.coerce.number(),
  title: z.string().max(100),
  body: z.string(),
  // name: z.string(),
})

type Post = z.infer<typeof Post>


//user
const User = z.object({
  id: z.number(),
  // name: z.string().min(2),
  username: z.string(),
  email: z.string().email(),
})

type User = z.infer<typeof User>




export const useGetPost = () => {
  return useQuery({
    queryKey: ['Posts'], queryFn: async (): Promise<Post> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      const parsedPost = Post.parse(response?.data)
      return parsedPost;
    }
  })
}

//typescript
// export const useGetPost = () => {
//   return useQuery({
//     queryKey: ['Posts'], queryFn: async (): Promise<Post> => {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
//       return response.data as Post;
//     }
//   })
// }



export const useGetUsers = () => {
  return useQuery({
    queryKey: ['Users'], queryFn: async (): Promise<User[]> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const parsedUsers = z.array(User).parse(response.data)
      return parsedUsers
    }
  })
}
