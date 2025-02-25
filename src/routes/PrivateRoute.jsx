import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userInfo } from "../context/Verification";

const PrivateRoute = () => {
  const { user, loading } = useContext(userInfo);

  if (loading) {
    return (
      <p className="flex justify-center items-center mt-20">
        <div className="flex min-w-xl flex-col gap-4 ">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-40 min-w-xl"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </p>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
