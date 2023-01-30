import {
  GoogleAuthProvider,
  signInWithRedirect,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../services/firebase";

//-----
export const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};
export const githubSignIn = () => {
  const provider = new GithubAuthProvider();
  signInWithRedirect(auth, provider);
};
//----

export const logout = () => {
  auth.signOut();
};
