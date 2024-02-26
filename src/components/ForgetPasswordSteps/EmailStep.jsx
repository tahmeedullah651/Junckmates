// import React from "react";
// import InputWrapper from "../Input/InputWrapper";
// import InputSmall from "../Input/InputSmall";
// import { useFormik } from "formik";
// import { emailSchema } from "../../Schema";
// import FormLayout from "../../Layouts/FormLayout";
// import { useDispatch } from "react-redux";
// import { emailVerification } from "../../Redux/Actions";

// const EmailStep = ({ onNext, onBack, stateData, setStateData }) => {
//   const dispatch = useDispatch();
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         email: "",
//       },
//       validationSchema: emailSchema,
//       onSubmit: (values) => {
//         setStateData((pre) => {
//           return {
//             ...pre,
//             email: values.email,
//           };
//         });
//         dispatch(emailVerification(values.email))
//           .then((res) => {
//             setStateData((pre) => {
//               return {
//                 ...pre,
//                 email: res?.data?.email,
//                 encryptOpts: res?.data?.otp,
//               };
//             });
//             onNext();
//           })
//           .catch((err) => {
//             console.error("Something went wrong");
//           });
//       },
//     });

//   return (
//     <FormLayout
//       header=" Email Confirmation"
//       description="We want to confirm your email"
//       onSubmit={handleSubmit}
//       onCancel={onBack}
//     >
//       <div className="w-full md:w-[80%] mx-auto pt-6 pb-2 px-2 md:px-4">
//         <InputWrapper>
//           <InputSmall
//             label="Email"
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={values.email}
//             touch={touched.email}
//             onBlur={handleBlur}
//             onChange={handleChange}
//             error={errors.email}
//           />
//         </InputWrapper>
//       </div>
//     </FormLayout>
//   );
// };

// export default EmailStep;
