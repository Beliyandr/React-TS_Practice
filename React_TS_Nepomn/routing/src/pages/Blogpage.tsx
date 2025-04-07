import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Post } from "../types/Post";

export const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  console.log(useLocation());

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <div>
      <h1>Our news</h1>

      <Link to="/posts/new"> Add new Post</Link>
      {posts.map((post: Post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};
