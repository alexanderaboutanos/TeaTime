/** @format */

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AppContext from "./AppContext";

const Private = ({ children }) => {
  const { currentUser } = useContext(AppContext);
  return currentUser ? children : <Navigate to="/login" replace />;
};

export default Private;
