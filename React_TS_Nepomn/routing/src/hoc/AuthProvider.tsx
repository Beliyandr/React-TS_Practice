import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const signin = (newUser: string, cb: () => void): void => {
    setUser(newUser);
    cb();
  };
  const signout = (cb: () => void) => {
    setUser(null);
    cb();
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
