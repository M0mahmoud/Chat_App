import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };
  return (
    <Navbar bg="light" expand="md" className="border-bottom">
      <Container fluid>
        <Navbar.Brand href="#">React Chat</Navbar.Brand>
        {user ? (
          <Button variant="outline-primary" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <Button variant="outline-primary" onClick={googleSignIn}>
            Login With Google
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
