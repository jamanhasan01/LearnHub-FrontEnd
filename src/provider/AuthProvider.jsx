import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export let authContext = createContext();

const AuthProvider = ({ children }) => {
  let [user, setuser] = useState(null);
  let [loading, setLoading] = useState(true);

  let googleProvider = new GoogleAuthProvider();
  let loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  let signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    let unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe();
  }, []);

  console.log(user);

  let authInfo = {
    loginWithGoogle,
    setuser,
    user,
    setLoading,
    loading,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
