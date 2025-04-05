import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { UsersProvider } from "./store/UsersContext";
import { PostsProvider } from "./store/PostsContext";
import { NewPostPage } from "./pages/NewPostPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { PostsPage } from "./pages/PostsPage";
import { UsersPage } from "./pages/UsersPage";
import { HomePage } from "./pages/HomePage";
import { App } from "./App";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./pages/RequireAuth";
import { AuthProvider } from "./store/AuthContext";

export const Root = () => (
  <Router>
    <AuthProvider>
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
              <Route path="*" element={<p>404 Not Found</p>} />
            </Route>
          </Routes>
        </PostsProvider>
      </UsersProvider>
    </AuthProvider>
  </Router>
);
