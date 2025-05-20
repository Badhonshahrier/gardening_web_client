import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "hablu mia",
    email: "hablu@mia.com",
  });

  // register

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // goggle
  const provider = new GoogleAuthProvider();
  const goggleAuth = () => {
    return signInWithPopup(auth, provider);
  };

  const authData = {
    user,
    setUser,
    createUser,
    logInUser,
    goggleAuth,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
