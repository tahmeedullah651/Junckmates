// import React from "react";
// import InputWrapper from "../Input/InputWrapper";
// import InputSmall from "../Input/InputSmall";
// import { useFormik } from "formik";
// import { otpValidation } from "../../Schema";
// import FormLayout from "../../Layout/FormLayout";
// import { otpVerification } from "../../Redux/Actions";
// import { useDispatch } from "react-redux";

// const OtpStep = ({ onNext, onBack, stateData, setStateData }) => {
//   const dispatch = useDispatch();
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: stateData,
//       validationSchema: otpValidation,
//       onSubmit: (values) => {
//         setStateData((pre) => {
//           return {
//             ...pre,
//             otp: values.otp,
//           };
//         });

//         dispatch(
//           otpVerification({
//             otp: values.otp,
//             encryptOpts: values.encryptOpts,
//           })
//         )
//           .then((res) => {
//             onNext();
//           })
//           .catch((err) => {
//             console.error("Something went wrong");
//           });
//       },
//     });

//   return (
//     <FormLayout
//       header="OTP confirmation"
//       description="Please check your email"
//       onSubmit={handleSubmit}
//       onCancel={onBack}
//     >
//       <div className="w-full md:w-[80%] mx-auto pt-6 pb-2 px-2 md:px-4">
//         <InputWrapper>
//           <InputSmall
//             label="OTP"
//             name="otp"
//             type="number"
//             placeholder="Enter OTP"
//             value={values.otp}
//             touch={touched.otp}
//             onBlur={handleBlur}
//             onChange={handleChange}
//             error={errors.otp}
//           />
//         </InputWrapper>
//       </div>
//     </FormLayout>
//   );
// };

// export default OtpStep;
