import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "./auth";
import PropTypes from "prop-types";

export const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};
RequireAuth.propTypes = { children: PropTypes.node };
