// #region imports
import React, { useCallback, useMemo, useState } from "react";

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
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const addPost = useCallback((post: Post) => {
    setPosts((currentPosts) => {
      const newPost = {
        ...post,
        id: getNewPostId(currentPosts),
      };
      return [...currentPosts, newPost];
    });
  }, []);

  const deletePost = useCallback((postId: number) => {
    setPosts((currentPosts) => {
      return currentPosts.filter((post) => post.id !== postId);
    });
  }, []);

  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  const handleQueryCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.includes(query));
  }, [posts, query]);

  const updatePost = useCallback((updatedPost: Post) => {
    setPosts((currentPosts) => {
      const newPosts = [...currentPosts];
      const index = currentPosts.findIndex(
        (post) => post.id === updatedPost.id
      );

      newPosts.splice(index, 1, updatedPost);

      return newPosts;
    });
  }, []);

  return (
    <div className="section">
      <input type="text" value={query} onChange={handleQueryCHange} />
      <button onClick={() => setCount((x) => x + 1)}>{count}</button>
      <h1 className="title">Create a post</h1>

      <PostList
        posts={filteredPosts}
        onDelete={deletePost}
        onSelect={setSelectedPost}
      />

      {selectedPost ? (
        <PostForm
          onSubmit={updatePost}
          post={selectedPost}
          key={selectedPost.id}
        />
      ) : (
        <PostForm onSubmit={addPost} />
      )}
    </div>
  );
};
