"use client";

import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useEffect } from "react";
import app from "@/Firebase/Firebase.config";

export const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, SetUser] = useState({});
  const [AuthLoading, SetAuthLoading] = useState(false);

  const signUp = (email, password) => {
    SetAuthLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    SetAuthLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogIn = (provider) => {
    SetAuthLoading(true);

    return signInWithPopup(auth, provider);
  };
  const facebookLogIn = (provider) => {
    SetAuthLoading(true);

    return signInWithPopup(auth, provider);
  };
  const githubLogIn = (provider) => {
    SetAuthLoading(true);

    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (profile) => {
    SetAuthLoading(true);

    return updateProfile(auth.currentUser, profile);
  };

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      SetUser(currentUser);
      SetAuthLoading(false);
      console.log("currentuser", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    SetUser,
    signUp,
    login,
    updateUserProfile,
    logout,
    googleLogIn,
    githubLogIn,
    AuthLoading,
    passwordReset,
    SetAuthLoading,
    facebookLogIn,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default UserContext;

export const useAuth = () => {
  return useContext(authContext);
};
