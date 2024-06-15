import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PostForm } from "./PostForm";

function App() {
  return (
    <div className="App">
      <h1>Create a post</h1>

      <PostForm />
    </div>
  );
}

export default App;
