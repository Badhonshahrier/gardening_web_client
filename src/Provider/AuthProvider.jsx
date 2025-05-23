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

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  console.log(user)
  // register

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const userLogOut = () => {
    return signOut(auth);
  };

  // goggle
  const provider = new GoogleAuthProvider();
  const goggleAuth = () => {
    return signInWithPopup(auth, provider);
  };

  // update

  const userProfile = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  // auth related

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    logInUser,
    goggleAuth,
    userProfile,
    userLogOut,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
