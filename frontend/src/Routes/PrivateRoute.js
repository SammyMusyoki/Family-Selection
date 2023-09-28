import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useUserAuth } from "../Contexts/AuthContext";

const PrivateRoute = () => {
    const { user } = useUserAuth()

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
