// import React from "react";
// import { useState } from "react";
// import EmailStep from "../components/ForgetPasswordSteps/EmailStep";
// import OtpStep from "../components/ForgetPasswordSteps/OtpStep";
// import NewPasswordStep from "../components/ForgetPasswordSteps/NewPasswordStep";
// import { useNavigate } from "react-router-dom";

// const Steps = {
//   1: EmailStep,
//   2: OtpStep,
//   3: NewPasswordStep,
// };
// const ForgetPassword = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const CurrentStep = Steps[step];
//   const [data, setData] = useState({
//     email: "",
//     encryptOpts: "",
//     otp: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   function handleNext() {
//     setStep(step + 1);
//   }

//   function handleBack() {
//     if (step === 1) {
//       navigate("/signin");
//     } else {
//       setStep(step - 1);
//     }
//   }

//   return (
//     <>
//       <CurrentStep
//         onNext={handleNext}
//         onBack={handleBack}
//         stateData={data}
//         setStateData={setData}
//       />
//     </>
//   );
// };

// export default ForgetPassword;
