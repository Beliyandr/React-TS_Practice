import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { Post } from "../types/Post";
import { BlogFilter } from "../components/BlogFilter";

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const latest = searchParams.has("latest");

  const startsFrom = latest ? 80 : 1;

  const postQuery = searchParams.get("post") || "";
  // URL.ua/posts?post=abc&data=

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>

      <BlogFilter
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        latest={latest}
      />

      <Link to="/posts/new"> Add new Post</Link>
      {posts
        .filter(
          (post: Post) =>
            post.title.includes(postQuery) && post.id >= startsFrom
        )
        .map((post: Post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};
