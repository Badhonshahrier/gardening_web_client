import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(user);
  // register

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // goggle
  const provider = new GoogleAuthProvider();
  const goggleAuth = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // update

  const userProfile = (updateUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateUser);
  };

  // auth related

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("loading from 64", loading);

  const authData = {
    user,
    setUser,
    createUser,
    logInUser,
    goggleAuth,
    userProfile,
    userLogOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
