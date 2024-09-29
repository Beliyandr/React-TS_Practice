// #region imports
import React, { useCallback, useMemo, useRef, useState } from "react";

import { Post } from "./types/Post";
import { getMaxId, getPreparedPosts } from "./services/posts";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
// #endregion

function debounce(callback: Function, delay: number) {
  let timerId = 0;

  return (...args: any) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

export const App: React.FC = () => {
  // #region query
  const [query, setQuery] = useState("");

  const [count, setCount] = useState(0);

  const [appliedQuery, setAppliedQuery] = useState("");

  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  const timerId = useRef(0);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);
  };
  // #endregion
  // #region posts
  const [posts, setPosts] = useState<Post[]>(getPreparedPosts());
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const addPost = useCallback((post: Post) => {
    setPosts((currentPosts) => {
      const newPost = {
        ...post,
        id: getMaxId(posts) + 1,
      };
      return [newPost, ...currentPosts];
    });
  }, []);

  const deletePost = useCallback((postId: number) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId)
    );
  }, []);

  const updatePost = useCallback((updatedPost: Post) => {
    setPosts((currentPosts) => {
      const newPosts = [...currentPosts];
      const index = newPosts.findIndex((post) => post.id === updatedPost.id);

      newPosts.splice(index, 1, updatedPost);

      return newPosts;
    });
  }, []);

  // #endregion

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.includes(query));
  }, [posts, appliedQuery]);

  console.log(selectedPost);

  return (
    <div className="section py-5">
      <button className="button" onClick={() => setCount((count) => count + 1)}>
        {count}
      </button>
      <div className="columns is-mobile">
        <div className="column">
          <h1 className="title">Posts</h1>
        </div>

        <div className="column">
          <input
            type="text"
            className="input is-rounded"
            value={query}
            onChange={handleQueryChange}
          />
        </div>
      </div>

      <PostList
        posts={filteredPosts}
        selectedPostId={selectedPost?.id}
        onDelete={deletePost}
        onSelect={setSelectedPost}
      />

      {selectedPost ? (
        <PostForm
          onSubmit={updatePost}
          post={selectedPost}
          key={selectedPost.id}
          onReset={() => setSelectedPost(null)}
        />
      ) : (
        <PostForm onSubmit={addPost} />
      )}
    </div>
  );
};
