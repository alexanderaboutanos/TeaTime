/** @format */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../auth/UserContext";

const RequireAuth = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  console.debug("RequireAuth", "currentUser=", currentUser);

  return currentUser ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
