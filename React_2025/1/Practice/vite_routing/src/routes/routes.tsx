import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { MyProfile } from "../pages/MyProfile";
import { Delivery } from "../pages/Delivery";
import { Orders } from "../pages/Orders";
import { Settings } from "../pages/Settings";
import { Login } from "../pages/Login";
import { NoMatchPage } from "../pages/NoMatchPage";
import { PrivateRoute } from "./private.route";

export const Approutes = () => {
  const navigationRoutes = [
    { path: "/", element: <MainPage /> },
    { path: "/my-profile/:userId", element: <MyProfile /> },
    { path: "/orders", element: <Orders /> },
    { path: "/delivery", element: <Delivery /> },
    {
      path: "/settings",
      element: (
        <PrivateRoute>
          <Settings />
        </PrivateRoute>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "*", element: <NoMatchPage /> },
  ];

  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
