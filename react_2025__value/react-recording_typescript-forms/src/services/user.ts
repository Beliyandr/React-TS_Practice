import usersFromServer from "../api/users.json";
import { Post } from "../types/Post";
import { User } from "../types/User";

export function getUserById(userId: number): User | null {
  return usersFromServer.find((user) => user.id === userId) || null;
}

export function getPosts(): Promise<Post[]> {
  return fetch("http://localhost:3000/api/posts.json").then((response) => {
    return response.json();
  });
}
