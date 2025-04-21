/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";

import { PostList } from "../components/PostList";
import { Loader } from "../components/Loader";
import { PostsContext } from "../store/PostsContext";
import { Link, Outlet, useParams } from "react-router-dom";

export const PostsPage: React.FC = () => {
  const { posts, loading, errorMessage, loadPosts } = useContext(PostsContext);
  const { userId } = useParams();

  const selectUserId = userId ? +userId : 0;

  useEffect(() => {
    loadPosts(selectUserId);
  }, [selectUserId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="">
      <h1 className="title">User {selectUserId} Posts</h1>

      {posts.length > 0 ? (
        <PostList posts={posts} />
      ) : (
        <p>There are no posts yet</p>
      )}

      <Link to="new" className="button is-info">
        Create a post
      </Link>

      {errorMessage && <p className="notification is-danger">{errorMessage}</p>}
    </div>
  );
};
