import "./App.scss";
import "bulma";
import { PostForm } from "./PostForm";

function App() {
  return (
    <div className="section">
      <h1 className="title">Create a post</h1>

      <PostForm />
    </div>
  );
}

export default App;
