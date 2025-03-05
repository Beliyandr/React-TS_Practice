import { Post } from "../types";
import { getData } from "../utils/httpClients";

export function getUserPosts(userId: number): Promise<Post[]> {
  return getData<Post[]>(`/posts?userId=${userId}`);
}
