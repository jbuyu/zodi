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

const Post = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
  // name: z.string(),
})

type Post = z.infer<typeof Post>


export const useGetPosts = () => {
  //runtime parsing
  return useQuery({
    queryKey: ['Users'], queryFn: async (): Promise<Post> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      const parsedPost = Post.parse(response?.data)
      return parsedPost;
    }
  })
}
