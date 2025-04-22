import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UsersProvider } from "./store/UsersContext";
import { PostsProvider } from "./store/PostsContext";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";
import { PostsPage } from "./pages/PostsPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { NewPostPage } from "./pages/NewPostPage";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./pages/RequireAuth";

export const Root = () => (
  <Router>
    <UsersProvider>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="users" element={<RequireAuth />}>
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
            <Route path="*" element={<p>NOT FOUND </p>} />
          </Route>
        </Routes>
      </PostsProvider>
    </UsersProvider>
  </Router>
);
