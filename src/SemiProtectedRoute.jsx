import React from "react";
import { Navigate } from "react-router-dom";
const SemiProtectedRoute = ({ user, children }) => {
  if (!user.name) {
    return (
      <>
        <Navigate to="/authenticate" />
      </>
    );
  } else if (!user.activated) {
    return (
      <>
        <Navigate to="/rooms" />
      </>
    );
  } else {
    return (
      <>
        <Navigate to="/rooms" />
      </>
    );
  }
};

export default SemiProtectedRoute;
