// #region imports
import React, { useCallback, useRef, useState } from "react";

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
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const [appliedQuery, setAppliedQuery] = useState("");

  const applyQuery = debounce(setAppliedQuery, 1000);

  const timerId = useRef(0);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);

    // window.clearTimeout(timerId.current);

    // timerId.current = window.setTimeout(() => {
    //   setAppliedQuery(event.target.value);
    // }, 1000);
  };
  // #endregion
  // #region posts
  const [posts, setPosts] = useState<Post[]>(getPreparedPosts());

  const addPost = useCallback((post: Post) => {
    setPosts((currentPosts) => {
      const newPost = {
        ...post,
        id: getMaxId(currentPosts) + 1,
      };

      return [newPost, ...currentPosts];
    });
  }, []);

  const deletePost = useCallback((postId: number) => {
    setPosts((currentPosts) =>
      currentPosts.filter((post) => post.id !== postId)
    );
  }, []);

  // #endregion

  const filteredPosts = React.useMemo(() => {
    return posts.filter((post) => post.title.includes(query));
  }, [appliedQuery, posts]);

  const updatePost = useCallback((updatePost: Post) => {
    setPosts((currentPosts) => {
      const newPosts = [...currentPosts];
      const index = newPosts.findIndex((post) => post.id === updatePost.id);
      newPosts.splice(index, 1, updatePost);

      return newPosts;
    });
  }, []);

  return (
    <div className="section py-5">
      <button
        className="button"
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        {count} {selectedPost?.id}
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
        onDelete={deletePost}
        onSelect={setSelectedPost}
        selectedPostId={selectedPost?.id}
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
