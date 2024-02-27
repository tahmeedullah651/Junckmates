import React from "react";
import { useFormik } from "formik";
import { otpValidation } from "../../Schema";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import Header from "../Header/Header";
import { email } from "../../redux/slices/emailVerificationSlice";
import ButtonLoading from "../Button/ButtonLoading";
import { useNavigate } from "react-router-dom";
import { otp } from "../../redux/slices/otpValidationSlice";
const OtpValidation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.otp);
  const data = useSelector((state) => state.email);
  console.log("email user otp", data);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        inputCode: "",
      },
      validationSchema: otpValidation,
      onSubmit: () => {
        console.log("otp vild", data);
        dispatch(
          otp({
            inputCode: values.inputCode,
            code: data.data.code,
            userid: data.data.userid,
          })
        )
          .then((res) => {
            console.log("res otp", res);
            if (res.type === "otp/fulfilled") {
              navigate("/new_password");
            }
          })
          .catch((err) => {
            console.log("error ===>", err);
          });
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-[80vw] h-full  flex justify-center mt-20 gap-6">
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4 ">
            <h1 className="font-satoshi font-bold text-3xl py-4">
              OTP Confirmation
            </h1>
            <div className="flex flex-col gap-5">
              <Input
                autoComplete="off"
                label="Enter OTP"
                name="inputCode"
                type="number"
                placeholder="Enter OTP"
                value={values.inputCode}
                touch={touched.inputCode}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.inputCode}
                customClasses={"!w-full"}
              />
              <div className="w-full text-center">
                {isLoading ? (
                  <ButtonLoading customClasses="!w-full !mx-auto" />
                ) : (
                  <button
                    className="rounded-md flex justify-center items-center p-2.5 bg-emerald-400 gap-1 text-white w-full"
                    type="submit"
                    disabled={isLoading}
                  >
                    Verify Otp
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default OtpValidation;
