import React from "react";

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Home = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome mt-5 ">
      <h3 className="">Welcome to React Chat.</h3>
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button onClick={googleSignIn} type="button" className="btn btn-info">
        Sign In With Google
      </button>
    </main>
  );
};

export default Home;
