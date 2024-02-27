import React from "react";
import { useFormik } from "formik";
import { passwordSchema } from "../../Schema";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import ButtonLoading from "../Button/ButtonLoading";
import { useNavigate } from "react-router-dom";
import { newPassword } from "../../redux/slices/newPasswordSlice";
const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.Newpassword);
  const data = useSelector((state) => state.email);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        newPassword: "",
      },
      validationSchema: passwordSchema,
      onSubmit: () => {
        dispatch(
          newPassword({
            userId: data.data.userid,
            password: values.newPassword,
          })
        )
          .then((res) => {
            if (res.type === "newPassword/fulfilled") {
              navigate("/login");
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
              Update Your Password
            </h1>
            <div className="flex flex-col gap-5">
              <Input
                autoComplete="off"
                label="Enter New Password"
                name="newPassword"
                type="number"
                placeholder="New Password"
                value={values.newPassword}
                touch={touched.newPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.newPassword}
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
                    Update Password
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

export default NewPassword;
