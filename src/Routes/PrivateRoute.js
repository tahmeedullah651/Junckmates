import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth);
  const AdminToken = localStorage.getItem("token");
  const location = useLocation();
  if (currentUser.isAuth || AdminToken) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

// import { useSelector } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";

// export default function PrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Outlet /> : <Navigate to="/login" />;
// }

// import { useSelector } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";

// export default function PrivateRoute() {
//   const { currentUser } = useSelector((state) => state.user);

//   // Check if currentUser exists and is authenticated
//   const isAuth = currentUser && currentUser.isAuth;

//   return isAuth ? <Outlet /> : <Navigate to="/login" />;
// }
