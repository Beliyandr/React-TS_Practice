// #region imports
import React from "react";

import { Post } from "./types/Post";
import postsFromServer from "./api/posts.json";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { getUserById } from "./services/user";
// #endregion

const initialPosts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
}));

function getNewPostId(posts: Post[]) {
  // return +Math.random().toFixed(12).slice(2);
  const maxId = Math.max(...posts.map((post) => post.id));
  return maxId + 1;
}

export const App: React.FC = () => {
  const [posts, setPosts] = React.useState<Post[]>(initialPosts);
  const addPost = (post: Post) => {
    const newPost = {
      ...post,
      id: getNewPostId(posts),
    };
    setPosts((currentPosts) => [...currentPosts, newPost]);
  };
  return (
    <div className="section">
      <h1 className="title">Create a post</h1>

      <PostForm onSubmit={addPost} />
      <PostList posts={posts} />
    </div>
  );
};
