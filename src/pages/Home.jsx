import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="welcome mt-5 text-center">
      <h3>React Chat</h3>
      <p>A great place to share your thoughts with friends</p>
      <div className="mt-5 d-flex justify-content-center flex-column ">
        <Link className="btn btn-primary px-3  mb-3" to="/signup">
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
