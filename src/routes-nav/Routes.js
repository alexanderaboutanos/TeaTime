/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";

const RouteList = () => {
  return (
    <Routes>
      {/* List all companies */}
      <Route
        path="/companies"
        element={
          <RequireAuth>
            <Companies />
          </RequireAuth>
        }
      />

      {/* View details of this company */}
      <Route
        path="/companies/:handle"
        element={
          <RequireAuth>
            <Company />
          </RequireAuth>
        }
      />

      {/* List all jobs */}
      <Route
        path="/jobs"
        element={
          <RequireAuth>
            <Jobs />
          </RequireAuth>
        }
      />

      {/* Edit profile page */}
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />

      {/* Homepage — just a simple welcome message */}
      <Route path="/" element={<Homepage />} />

      {/* Login/signup */}
      <Route path="/login" element={<Login />} />

      {/* Signup form */}
      <Route path="/signup" element={<SignUpForm />} />
    </Routes>
  );
};

export default RouteList;
