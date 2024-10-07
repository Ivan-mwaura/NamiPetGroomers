import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const userToken = localStorage.getItem("UserToken");
  const adminToken = localStorage.getItem("AdminToken");

  if (!userToken && !adminToken) {
    
    return <Navigate to="/login" replace />;
  }

  return children;
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
