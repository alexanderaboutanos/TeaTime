/** @format */

import { useContext } from "react";
import UserContext from "../auth/UserContext";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div>
      <h2 style={{ margin: "25px" }}>My Account</h2>
      <p>
        <b>Username:</b> {currentUser.username}
      </p>
      <p>
        <b>First Name:</b> {currentUser.first_name}
      </p>
      <p>
        <b>Last Name:</b> {currentUser.last_name}
      </p>
    </div>
  );
};

export default Profile;
