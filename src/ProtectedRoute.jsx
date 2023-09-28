import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, user }) => {
  if (!user || !user.activated) {
    return <Navigate to="/authenticate" />;
  }

  return children;
};

export default ProtectedRoute;
