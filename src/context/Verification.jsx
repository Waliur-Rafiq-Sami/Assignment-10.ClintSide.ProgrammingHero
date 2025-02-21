import React, { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

export const userInfo = createContext();

const Verification = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const usingGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Successfully Login",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const usingGithubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "Successfully Login",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const createUserUsingEmail = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const loginUsingEmail = (e, p) => {
    return signInWithEmailAndPassword(auth, e, p);
  };

  const handleLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
        console.log("User signed out");
      }
    });
    return () => unSubscribe();
  }, []);

  const info = {
    user,
    setUserName,
    loading,
    createUserUsingEmail,
    loginUsingEmail,
    usingGoogleSignIn,
    usingGithubSignIn,
    handleLogOut,
  };
  return <userInfo.Provider value={info}>{children}</userInfo.Provider>;
};

export default Verification;
