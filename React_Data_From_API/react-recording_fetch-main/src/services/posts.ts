import { Post } from "../types";
import { getData } from "../utils/httpClient";

export function getUserPosts(userId: number) {
  return getData<Post[]>("/post.json").then((posts) =>
    posts.filter((post) => post.userId === userId)
  );
}
