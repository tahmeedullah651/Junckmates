import * as Yup from "yup";
const stringValidation = (message = "Field is required") =>
  Yup.string().trim().required(message);
const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} `;
};

export const LoginSchema = Yup.object().shape({
  //   username: Yup.string().min(4).max(25).required("username is required"),
  email: Yup.string().email().required("email is required"),
  password: Yup.string().min(3).max(25).required("Please enter your password"),
  //   conformPassword: Yup.string()
  //     .required()
  //     .oneOf([Yup.ref("password"), null], "Password must be matched"),
});
export const emailSchema = Yup.object({
  email: stringValidation("Email is required").email(),
});
export const otpValidation = Yup.object({
  inputCode: Yup.number().required("OTP is required"),
});
export const passwordSchema = Yup.object({
  newPassword: Yup.number().required("Password is required"),
});
export const dumpsterSchema = Yup.object({
  dumpsterSize: Yup.number().required("Dumpster size is required"),
  loadSize: stringValidation("loadSize is required"),
});
export const junkSchema = Yup.object({
  name: stringValidation("Junk category is required"),
});
export const changePasswordSchema = Yup.object({
  password: Yup.string().required("New Password is required"),
  currentPassword: Yup.string().required("Current Password is required"),
});
