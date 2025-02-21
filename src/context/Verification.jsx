import React, { createContext, useState } from "react";
import auth from "./firebase.config";

const userInfo = createContext();

const Verification = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUserUsingEmail = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  const info = { loading, createUserUsingEmail };
  return <userInfo.Provider value={info}>{children}</userInfo.Provider>;
};

export default Verification;
