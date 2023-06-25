import { useLocation, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};
export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  isAuthenticated: PropTypes.bool,
};
