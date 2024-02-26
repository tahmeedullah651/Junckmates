import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RedirectRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.auth);
  if (currentUser?.isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};
// import { useSelector } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";

// export function RedirectRoute() {
//   const currentUser  = useSelector((state) => state.user);

//   // If the user is authenticated, render the child routes
//   // Otherwise, redirect them to the login page
//   const isAuth = currentUser && currentUser.isAuth;
//   return isAuth ? <Outlet /> : <Navigate to="/login" />;
// }

// import { useSelector } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";

// export default function RedirectRoute() {
//   const { currentUser } = useSelector((state) => state.user);
//   return currentUser ? <Outlet /> : <Navigate to="/login" />;
// }
