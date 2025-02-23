import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user")); // Get user object
    return user && user.token ? children : <Navigate to="/login" />;
  };
  

export default ProtectedRoute;
