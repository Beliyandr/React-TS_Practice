// #region imports
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Post } from "./types/Post";
import postsFromServer from "./api/posts.json";
import { PostForm } from "./PostForm";
import { PostList } from "./PostList";
import { getPosts, getUserById } from "./services/user";
import { useLocalStorage } from "./hooks/useLocalStorage";
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

function debounce(callback: Function, delay: number) {
  let timerId = 0;

  return (...args: any) => {
    window.clearTimeout(timerId);

    timerId = window.setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return () => {};
}

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(
        posts.map((post: Post) => ({
          ...post,
          user: getUserById(post.userId),
        }))
      );
    });
  }, []);

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
  const [appliedQuery, setAppliedQuery] = useState("");

  const handleQueryCHange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    applyQuery(event.target.value);
  };

  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.title.includes(appliedQuery));
  }, [posts, appliedQuery]);

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

  const [ids, setIds] = useLocalStorage<number[]>("ids", []);

  function addValue(value: number) {
    setIds([...ids, value]);
  }

  return (
    <>
      <div className="section">
        <div
          className="section__filtered"
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <label>
            <input
              name="filtered"
              type="text"
              value={query}
              onChange={handleQueryCHange}
            />
          </label>
          <button onClick={() => setCount((x) => x + 1)}>{count}</button>
          <h1 className="title" style={{ flex: "0 0 100%" }}>
            Create a post
          </h1>
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

      {/* <div className="section">
        <ul style={{ display: "flex", gap: 10, listStyle: "none" }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={Math.random()}>
              <button onClick={() => addValue(item)}> {item} </button>
            </li>
          ))}
        </ul>
        <div>{ids.join(", ")}</div>
      </div> */}
    </>
  );
};
