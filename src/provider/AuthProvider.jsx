import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";

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

  let updateUserProfile=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      if (currentUser?.email) {
        setuser(currentUser);
        axios
          .post(
            `https://learn-hub-server-side.vercel.app/jwt`,
            { email: currentUser.email },
            { withCredentials: true }
          )
          .then((res) => console.log(res.data))
          .catch((err) => console.error("Error fetching JWT:", err));
      } else {
        setuser(currentUser);
        axios
          .get(`https://learn-hub-server-side.vercel.app/logout`, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data))
          .catch((err) => toast.error("Error logging out:", err));
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  

  let authInfo = {
    loginWithGoogle,
    setuser,
    user,
    setLoading,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile
  };

  return <authContext.Provider value={authInfo}>{children}</authContext.Provider>;
};

export default AuthProvider;
