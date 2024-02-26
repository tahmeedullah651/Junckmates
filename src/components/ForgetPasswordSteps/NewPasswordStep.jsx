// import React from "react";
// import InputWrapper from "../Input/InputWrapper";
// import { useFormik } from "formik";
// import { passwordSchema } from "../../Schema";
// import FormLayout from "../../Layout/FormLayout";
// import InputPassword from "../Input/InputPassword";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setNewpassword } from "../../Redux/Actions";

// const NewPasswordStep = ({ onBack, stateData, setStateData }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: stateData,
//       validationSchema: passwordSchema,
//       onSubmit: (values, action) => {
//         setStateData((pre) => {
//           return {
//             ...pre,
//             newPassword: values.newPassword,
//             confirmPassword: values.confirmPassword,
//           };
//         });

//         dispatch(
//           setNewpassword({
//             email: stateData.email,
//             encryptOpts: stateData.encryptOpts,
//             otp: stateData.otp,
//             newPassword: values.newPassword,
//           })
//         )
//           .then((result) => {
//             action.resetForm();
//             setTimeout(() => {
//               navigate("/signin");
//             }, 3000);
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       },
//     });

//   return (
//     <FormLayout
//       header=" New Password"
//       description="Set new password to login"
//       onSubmit={handleSubmit}
//       onCancel={onBack}
//     >
//       <div className="w-full md:w-[80%] mx-auto pt-6 pb-2 px-2 md:px-4">
//         <InputWrapper>
//           <InputPassword
//             label="Password"
//             name="newPassword"
//             placeholder="Enter Password"
//             value={values.newPassword}
//             touch={touched.newPassword}
//             onBlur={handleBlur}
//             onChange={handleChange}
//             error={errors.newPassword}
//           />
//         </InputWrapper>
//         <InputWrapper customclasses="!mt-5">
//           <InputPassword
//             label="Confirm Password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={values.confirmPassword}
//             touch={touched.confirmPassword}
//             onBlur={handleBlur}
//             onChange={handleChange}
//             error={errors.confirmPassword}
//           />
//         </InputWrapper>
//       </div>
//     </FormLayout>
//   );
// };

// export default NewPasswordStep;
