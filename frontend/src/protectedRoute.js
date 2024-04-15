import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, isProtected }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isProtected && isAuthenticated) {
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;
