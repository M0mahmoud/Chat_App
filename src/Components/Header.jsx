import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Navbar } from "react-bootstrap";

import { auth } from "../services/firebase";
import { logout } from "../helpers/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="md" className="border-bottom">
      <Container fluid>
        <Link to="/" className="btn btn-primary">
          React Chat
        </Link>
        {user && (
          <Button variant="outline-primary" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
