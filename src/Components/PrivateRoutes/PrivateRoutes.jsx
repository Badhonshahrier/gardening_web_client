import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(loading);
  if (loading) {
    return (
      <div className="h-20 w-full text-center flex justify-center items-center">
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoutes;
