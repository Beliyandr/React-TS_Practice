import { Post, User } from "../types";
import { getData } from "../utils/httpClient";

export function getUserPosts(userId: number) {
  return getData<Post[]>(`/posts?userId=${userId}`).then((posts) => {
    return posts.filter((post) => post.userId === userId);
  });
}
