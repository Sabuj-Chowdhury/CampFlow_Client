import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Components/shared/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
