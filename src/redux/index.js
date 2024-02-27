import { combineReducers } from "redux";
import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashboardSlice";
import userReducer from "./slices/userSlice";
import collectorReducer from "./slices/collectorSlice";
import junkReducer from "./slices/junkSlice";
import emailReducer from "./slices/emailVerificationSlice";
import dumpsterReducer from "./slices/dumpsterSlice";
import otpReducer from "./slices/otpValidationSlice";
import newPasswordReducer from "./slices/newPasswordSlice";
import detailReducer from "./slices/detailSlice";
import reviewsReducer from "./slices/reviewsSlice";
// import statusReducer from "./slices/changeStatusSlice";
export default combineReducers({
  auth: authReducer,
  dashbaord: dashboardReducer,
  user: userReducer,
  collector: collectorReducer,
  junk: junkReducer,
  email: emailReducer,
  dumpster: dumpsterReducer,
  otp: otpReducer,
  Newpassword: newPasswordReducer,
  detail: detailReducer,
  reviews: reviewsReducer,
  // status: statusReducer,
});
