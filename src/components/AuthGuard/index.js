import { Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ROUTES from "../../constants/routes";

function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect to={ROUTES.PAGE_SIGN_IN} />;
  }
  return <>{children}</>;
}

export default AuthGuard;
