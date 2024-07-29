import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma";
import { PostForm } from "./PostForm";

export const App: React.FC = () => {
  return (
    <div className="section">
      <h1 className="title">Create post</h1>
      <PostForm />
    </div>
  );
};
