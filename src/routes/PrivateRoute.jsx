import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userInfo } from "../context/Verification";

const PrivateRoute = () => {
  const { user, loading } = useContext(userInfo);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
