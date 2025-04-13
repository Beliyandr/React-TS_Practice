import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLoaderData } from "react-router-dom";
import { Post } from "../types/Post";

export const SinglePage = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  // const [post, setPost] = useState<Post | null>(null);

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setPost(data));
  // }, [id]);
  const { post, id } = useLoaderData();

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      {/*Bad approach*/}
      {/* <button onClick={goHome}>Go Home</button> */}
      {/* {post && (
        <> */}
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit</Link>
        {/* </>
      )} */}
    </div>
  );
};

export const postLoader = async ({ params }) => {
  const id = params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return { post, id };
};
