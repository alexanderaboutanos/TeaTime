/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "../routes-nav/RequireAuth";
import AddTea from "../teaForms/AddTea";
import EditTea from "../teaForms/EditTea";
import TeaDetail from "../tea/TeaDetail";
import DiscoverTeaList from "../lists/DiscoverTeaList";
import WishList from "../lists/WishList";
import MyTeaList from "../lists/MyTeaList";
import Profile from "../profile/Profile";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import HelpPage from "../homepage/HelpPage";

// See if you can add 'nested routes'
// https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md
// what happens when a user visits an invalid page?

const RouteList = ({ login, signup }) => {
  return (
    <Routes>
      {/* Add new tea */}
      <Route
        path="/tea/add"
        element={
          <RequireAuth>
            <AddTea />
          </RequireAuth>
        }
      />

      {/* Edit tea details */}
      <Route
        path="/tea/edit/:id"
        element={
          <RequireAuth>
            <EditTea />
          </RequireAuth>
        }
      />

      {/* View details of individual tea */}
      <Route
        path="/tea/:id"
        element={
          <RequireAuth>
            <TeaDetail />
          </RequireAuth>
        }
      />

      {/* Discover New Teas (through Spoonacular) */}
      <Route
        path="/discover"
        element={
          <RequireAuth>
            <DiscoverTeaList />
          </RequireAuth>
        }
      />

      {/* List all teas in Wish List */}
      <Route
        path="/wish-list"
        element={
          <RequireAuth>
            <WishList />
          </RequireAuth>
        }
      />

      {/* List all teas in MyTea List */}
      <Route
        path="/my-teas"
        element={
          <RequireAuth>
            <MyTeaList />
          </RequireAuth>
        }
      />

      {/* View profile page */}
      <Route
        path="/profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />

      {/* Homepage ??? just a simple welcome message */}
      <Route path="/" element={<Homepage />} />

      {/* Help Page ??? explanation of how the app works */}
      <Route path="/help" element={<HelpPage />} />

      {/* Login/signup */}
      <Route path="/login" element={<LoginForm login={login} />} />

      {/* Signup form */}
      <Route path="/signup" element={<SignupForm signup={signup} />} />
    </Routes>
  );
};

export default RouteList;
