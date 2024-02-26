import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Collector from "../pages/Collector";
import User from "../pages/User";
import Junk from "../pages/Junk";
import Dumpster from "../pages/Dumpster";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import { PrivateRoute } from "../Routes/PrivateRoute";
import { RedirectRoute } from "../Routes/RedirectRoute";
import Notification from "../pages/Notification";
// import ForgetPassword from "../pages/ForgotPassword";
import EmailVerification from "../components/ForgetPasswordSteps/EmailVerification";
import PasswordLayout from "../Layouts/PasswordLayout";
import OtpValidation from "../components/ForgetPasswordSteps/OtpValidation";
import NewPassword from "../components/ForgetPasswordSteps/NewPassword";

import Details from "../pages/Details";
import Reviews from "../pages/Reviews";
export default createBrowserRouter([
  {
    path: "/login",
    element: (
      <RedirectRoute>
        <Login />
      </RedirectRoute>
    ),
  },
  // {
  //   path: "/forget_password",
  //   element: (
  //     <RedirectRoute>
  //       <EmailVerification />
  //     </RedirectRoute>
  //   ),
  // },
  {
    path: "",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/collector",
        element: <Collector />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/detail",
        element: <Details />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/junk-categories",
        element: <Junk />,
      },
      {
        path: "/dumpster-size",
        element: <Dumpster />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/notification",
        element: <Notification />,
      },
    ],
  },
  {
    path: "",
    element: (
      <RedirectRoute>
        <PasswordLayout />
      </RedirectRoute>
    ),
    children: [
      {
        path: "/email",
        element: <EmailVerification />,
      },
      {
        path: "/otp_validation",
        element: <OtpValidation />,
      },
      {
        path: "/new_password",
        element: <NewPassword />,
      },
    ],
  },
]);
