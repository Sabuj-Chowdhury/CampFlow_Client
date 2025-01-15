import PropTypes from "prop-types";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../Components/shared/LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { isAdmin, isLoading } = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
AdminRoutes.propTypes = {
  children: PropTypes.node,
};
