/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import UserContext from "../auth/UserContext";
import Background from "../common/Background";

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);

  return (
    <div className="Homepage">
      <Background />
      <div className="container text-center" style={{ zIndex: 100 }}>
        <h1 className="mb-4 font-weight-bold">TeaTime</h1>
        <p className="lead">All the teas in one, convenient place.</p>
        {currentUser ? (
          <h3>Welcome back, {currentUser.first_name}!</h3>
        ) : (
          <p>
            <Link className="btn btn-primary font-weight-bold mr-3" to="/login">
              Log in
            </Link>
            <Link className="btn btn-primary font-weight-bold" to="/signup">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Homepage;
