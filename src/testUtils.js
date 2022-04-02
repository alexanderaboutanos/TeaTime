/** @format */

import React from "react";
import UserContext from "./auth/UserContext";

const demoUser = {
  username: "testuser1",
  first_name: "Test",
  last_name: "User",
};

const UserProvider = ({ children, currentUser = demoUser }) => (
  <UserContext.Provider value={{ currentUser }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
