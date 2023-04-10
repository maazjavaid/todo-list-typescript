import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }: any) => {
  let token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
