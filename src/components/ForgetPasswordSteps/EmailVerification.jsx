import React from "react";
import { useFormik } from "formik";
import { emailSchema } from "../../Schema";

import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import Header from "../Header/Header";
import { email } from "../../redux/slices/emailVerificationSlice";
import ButtonLoading from "../Button/ButtonLoading";
import { useNavigate } from "react-router-dom";
const EmailVerification = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.email);
  // const isError = useSelector((state) => state.email);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit: () => {
        // setLoading(true);
        dispatch(email(values))
          .then((res) => {
            console.log("res", res.type);
            if (res.type === "email/fulfilled") {
              navigate("/otp_validation");
            }
          })
          .catch((err) => {
            console.log("error ===>", err);
          });
      },
      // onSubmit: async () => {
      //   try {
      //     const res = await dispatch(email(values));
      //     console.log("res", res);
      //     // Only navigate if email verification is successful
      //     navigate("/otp_validation");
      //   } catch (err) {
      //     console.log("error ===>", err);
      //   }
      // },
    });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-[80vw] h-full  flex justify-center mt-20 gap-6">
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4 ">
            <h1 className="font-satoshi font-bold text-3xl py-4">
              Login your account
            </h1>
            <div className="flex flex-col gap-5">
              <Input
                label="Email"
                id="email"
                name="email"
                autoComplete="off"
                type="email"
                placeholder="abdullah@gmail.com"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                touch={touched.email}
                error={errors.email}
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
                    Verify
                  </button>
                )}
                {isError && <p>{isError}</p>}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmailVerification;
