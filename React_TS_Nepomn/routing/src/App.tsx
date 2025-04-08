import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Aboutpage } from "./pages/Aboutpage";
import { HomePage } from "./pages/HomePage";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { SinglePage } from "./pages/SinglePage";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { LoginPage } from "./pages/LoginPage";

import { Layout } from "./components/Layout";

import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<Aboutpage />}>
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Our Team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<SinglePage />} />
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
      </Routes>
    </AuthProvider>
  );
};

export default App;
