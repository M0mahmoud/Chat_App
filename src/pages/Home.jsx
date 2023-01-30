import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="welcome mt-5 text-center">
      <h3>Welcome to React Chat.</h3>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <div className="mt-5">
        <Link className="btn btn-primary px-3 me-3" to="/signup">
          Create New Account
        </Link>
        <Link className="btn btn-outline-primary px-3" to="/login">
          Login to Your Account
        </Link>
      </div>
    </main>
  );
};

export default Home;
