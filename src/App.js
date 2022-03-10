/** @format */

import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import UserContext from "./auth/UserContext";
import Navigation from "./routes-nav/Navigation";
import Routes from "./routes-nav/Routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider>
        <div className="App">
          <Navigation />
          <Routes />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
