import { PostsProvider } from "./store/PostsContext";
import { UsersProvider } from "./store/UsersContext";
import { BrowserRouter as Router } from "react-router";

import { Routes, Route } from "react-router-dom";
import { NewPostPage } from "./pages/NewPostPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { PostsPage } from "./pages/PostsPage";
import { UsersPage } from "./pages/UsersPage";
import { HomePage } from "./pages/HomePage";
import { App } from "./App";

export const Root = () => (
  <Router>
    <UsersProvider>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="users">
              <Route index element={<UsersPage />} />

              <Route path=":userId?/posts">
                <Route index element={<PostsPage />} />
                <Route path=":postId" element={<PostDetailsPage />} />
                <Route path="new" element={<NewPostPage />} />
              </Route>
            </Route>
            <Route path="posts">
              <Route index element={<PostsPage />} />
              <Route path=":postId" element={<PostDetailsPage />} />
              <Route path="new" element={<NewPostPage />} />
            </Route>
            <Route path="*" element={<p>Not Found</p>} />
          </Route>
        </Routes>
      </PostsProvider>
    </UsersProvider>
  </Router>
);
