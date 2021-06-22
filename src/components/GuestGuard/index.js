import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROUTES from "../../constants/routes";

function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect to={ROUTES.PAGE_DASHBOARD} />;
  }
  return <>{children}</>;
}

export default GuestGuard;
