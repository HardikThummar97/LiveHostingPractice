import React, { createContext, useState } from "react";
import { Redirect } from "react-router-dom";

export const AuthContext = createContext({
  token: "",
  handleLogin: () => {}
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (token) => {
    setToken(token);
    // <Redirect to="/" />;
  };

  let value = { token, handleLogin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
