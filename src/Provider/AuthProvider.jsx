import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// ! create context and export
export const AuthContext = createContext();

// ? set auth
const auth = getAuth(app);

// ! create value for context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // ? create user for firebase
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ? login user
  const createLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ? Logout function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ! Share context value
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    createLogin,
    loading,
  };

  // ! Prevent user null value we use useEffect here

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    // ! return created authContext provider for shared value as a children
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
