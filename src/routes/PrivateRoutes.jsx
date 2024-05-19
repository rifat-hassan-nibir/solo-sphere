/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <p className="text-3xl font-bold text-center">Loading...</p>;
  if (user) return children;

  return <Navigate to="/login" state={location.pathname} replace={true}></Navigate>;
};

export default PrivateRoutes;
