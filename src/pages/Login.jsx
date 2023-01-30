import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";

import { auth } from "../services/firebase";
import { githubSignIn, googleSignIn } from "../helpers/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    error: null,
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          navigate("/chat");
        })
        .catch((error) => {
          const { message, code } = error;
          setUser({ ...user, error: message });
        });
    } catch (e) {
      console.log("e", e.message);
    }
  };

  const google = async () => {
    try {
      googleSignIn();
    } catch (error) {
      setUser({ ...user, error: error.message });
    }
  };

  const github = async () => {
    try {
      githubSignIn();
    } catch (error) {
      setUser({ ...user, error: error.message });
    }
  };

  return (
    <Container className="mt-5 ">
      <h2>
        Login to{" "}
        <Link className="title ml-2" to="/">
          React Chat
        </Link>
      </h2>
      <p className="lead">Fill in the form below to login to your account.</p>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email..."
            value={user.email}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password..."
            value={user.password}
            onChange={changeHandler}
          />
        </Form.Group>
        {user.error ? <p className="text-danger">{user.error}</p> : null}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <hr />
      <p className="text-muted">
        You can also log in with any of these services
      </p>

      <div className="mt-3">
        <Link
          className="btn btn-outline-danger px-3 me-3 mb-3"
          to="/signup"
          onClick={google}
        >
          Sign in with Google
        </Link>
        <Link className=" px-3 btn btn-secondary" to="/login" onClick={github}>
          Sign in with GitHub
        </Link>
      </div>
      <hr />
      <p className="text-muted">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </Container>
  );
};

export default Signup;
