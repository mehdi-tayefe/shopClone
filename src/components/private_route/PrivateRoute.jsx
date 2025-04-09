import { Navigate } from "react-router-dom";
import { useShopContext } from "../../context/shopContext";


// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { isLogin } = useShopContext();

  if (!isLogin) {
    return <Navigate to="/account" replace />;
  }

  return children;
}
