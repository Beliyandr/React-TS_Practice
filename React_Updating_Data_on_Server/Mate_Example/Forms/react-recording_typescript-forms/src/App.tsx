// #region imports
import React, { useState } from "react";

import { Post } from "./types/Post";

import postsFromServer from "./api/posts.json";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { getUserById } from "./services/user";
// #endregion

const initialPosts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
}));
// #endregion

console.log(initialPosts);

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (newPost: Post) => {
    setPosts((currentPosts) => [newPost, ...currentPosts]);
  };

  return (
    <div className="section">
      <h1 className="title">Create a post</h1>

      <PostForm onSubmit={addPost} />
      <PostList posts={posts} />
    </div>
  );
};
