import React, { FC } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export const PrivateRoute: FC<Props> = ({ children }) => {
  const isAuth = false;
  return isAuth ? children : <Navigate to="/login" />;
};
