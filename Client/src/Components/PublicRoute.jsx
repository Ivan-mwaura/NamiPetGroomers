import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function PublicRoute({ children }) {

  const userToken = localStorage.getItem("UserToken");
  const adminToken = localStorage.getItem("AdminToken");

  if ( userToken || adminToken) {
    return <Navigate to="/" replace />;
  }

  return children;
}

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
