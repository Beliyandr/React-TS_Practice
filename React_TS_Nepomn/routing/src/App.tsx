import React from "react";
import {
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Aboutpage } from "./pages/Aboutpage";
import { HomePage } from "./pages/HomePage";
import { blogLoader, Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { postLoader, SinglePage } from "./pages/SinglePage";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { LoginPage } from "./pages/LoginPage";

import { Layout } from "./components/Layout";

import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<Aboutpage />}>
        <Route path="contacts" element={<p>Our contacts</p>} />
        <Route path="team" element={<p>Our Team</p>} />
      </Route>
      <Route path="about-us" element={<Navigate to="/about" replace />} />
      <Route path="posts" element={<Blogpage />} loader={blogLoader} />
      <Route path="posts/:id" element={<SinglePage />} loader={postLoader} />
      <Route path="login" element={<LoginPage />} />
      <Route path="posts/:id/edit" element={<EditPost />} />
      <Route
        path="posts/new"
        element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Notfoundpage />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
