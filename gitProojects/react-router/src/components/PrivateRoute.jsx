import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ to, children, path, exact }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Redirect to={to || "/login"} />;
  }
  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};
