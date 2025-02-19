// #region initialPosts
import React from "react";
// import { Form } from "./Form";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { Post } from "./types/Post";

import postsFromServer from "./api/posts.json";
import usersFromServer from "./api/users.json";
import { User } from "./types/User";

function getUserById(userId: number): User | null {
  return usersFromServer.find((user) => user.id === userId) || null;
}

const initialPosts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
}));

//#endregion

export const App: React.FC = () => {
  return (
    <div className="section">
      <h1 className="title">Create a post</h1>

      <PostForm />
      <PostList posts={initialPosts} />
    </div>
  );
};
