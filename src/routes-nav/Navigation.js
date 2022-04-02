/** @format */

import { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import UserContext from "../auth/UserContext";

const Navigation = ({ logout }) => {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <Nav className="me-auto">
        <Nav.Link href="/my-teas">My Teas</Nav.Link>
        <Nav.Link href="/wish-list">Wishlist</Nav.Link>
        <Nav.Link href="/discover">Discover</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/help">Help</Nav.Link>
        <Nav.Link onClick={logout} href="/">
          Logout
        </Nav.Link>
      </Nav>
    );
  }

  function loggedOutNav() {
    return (
      <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
        <Nav.Link href="/help">Help</Nav.Link>
      </Nav>
    );
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ zIndex: 2 }}>
        <Container>
          <Navbar.Brand href="/">TeaTime</Navbar.Brand>
          {currentUser ? loggedInNav() : loggedOutNav()}
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
