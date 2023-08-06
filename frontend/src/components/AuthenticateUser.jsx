import { useLocation, Navigate } from "react-router-dom";

const AuthenticateUser = ({ children }) => {
  const Token = sessionStorage.getItem("Token");
  let location = useLocation();
  if (Token) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default AuthenticateUser;
