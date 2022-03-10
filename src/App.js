/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import TeaTimeApi from "./api/teaTime.api";
import UserContext from "./auth/UserContext";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";
import LoadingSpinner from "./common/LoadingSpinner";
import useLocalStorage from "./hooks/useLocalStorage";

import "./App.css";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "teaTime-token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState();
  const [infoLoaded, setInfoLoaded] = useState(false);

  console.debug(
    "App",
    "infoLoaded=",
    infoLoaded,
    "currentUser=",
    currentUser,
    "token=",
    token
  );

  /** Load user info from TeaTime Api.  */
  useEffect(
    function loadUserInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            TeaTimeApi.token = token;
            let currentUser = await TeaTimeApi.getCurrentUser();
            setCurrentUser(currentUser);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  /** SIGNUP */
  async function signup(signupData) {
    try {
      let token = await TeaTimeApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** LOGIN */
  async function login(loginData) {
    try {
      let token = await TeaTimeApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  /** LOGOUT */
  async function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Navigation logout={logout} />
          <Routes login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
