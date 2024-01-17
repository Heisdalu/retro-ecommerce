import { useLocation, Navigate } from "react-router-dom";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  isAuthenticated: boolean;
}

const ProtectedRoute: FC<Props> = ({ children, isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }

  return children;
};
export default ProtectedRoute;
