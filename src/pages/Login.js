import React from "react";
import LoginImg from "../assets/images/Group.png";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../Schema";
import { login } from "../redux/slices/authSlice";
import InputPassword from "../components/Input/InputPassword";
import ButtonLoading from "../components/Button/ButtonLoading";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.auth);
  const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        email: "tahmeedullah651@gmail.com",
        password: "",
        role: "Admin",
      },
      validationSchema: LoginSchema,
      onSubmit: () => {
        dispatch(login(values))
          .then((res) => {
            console.log("res login", res.status);
            setTimeout(() => {
              navigate("/");
            }, 3000);
          })
          .catch((err) => {
            console.log("error ===>", err);
          });
      },
    });
  // console.log("Error", isError);
  return (
    <div className="w-full h-full items-center flex flex-col justify-center ">
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="w-[80vw] h-full flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row flex justify-between mt-20 gap-6">
          <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4 ">
            <h1 className="font-satoshi font-bold text-3xl py-4">
              Login your account
            </h1>
            <p className="mb-3 text-gray-300 font-satoshi font-normal">
              lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document
            </p>
            <div className="flex flex-col gap-5">
              <div>
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
                {/* {errors.email && touched.email ? (
                  <p className="errorMessage">{errors.email}</p>
                ) : null} */}
              </div>
              <div>
                <InputPassword
                  label="Password"
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="00924789"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touch={touched.password}
                  error={errors.password}
                  customClasses={"!w-full"}
                />
                {/* {errors.password && touched.password ? (
                  <p className="errorMessage">{errors.password}</p>
                ) : null} */}
              </div>
              <div className="w-full text-right pr-3 -mt-3">
                <Link to="/email">
                  <h1 className="text-green-400">Forget password?</h1>
                </Link>
              </div>
              {/* <Link to="/email" className="text-right">
                Forgot Password?
              </Link> */}
              <div className="w-full text-center">
                {isLoading ? (
                  <ButtonLoading customClasses="!w-full !mx-auto" />
                ) : (
                  <button
                    className="rounded-md flex justify-center items-center p-2.5 bg-emerald-400 gap-1 text-white w-full"
                    type="submit"
                    disabled={isLoading}
                  >
                    Login
                  </button>
                )}
              </div>
              {/* <button
                className="rounded-md flex justify-center items-center py-3 px-4 bg-emerald-400 gap-1 text-white w-full"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <ButtonLoading /> : "Login"}
              </button> */}
              {/* <button
                className="rounded-md flex justify-center items-center px-3 py-2 bg-emerald-400 gap-1 text-white w-full"
                type="submit"
              >
                {isLoading ? <span className="pl-3">Loading...</span> : "Login"}
              </button> */}
            </div>
          </div>
          <div className="w-1/2 self-center">
            <img src={LoginImg} alt="" className="w-full" />
          </div>
        </div>
      </form>
      {/* {isError && <span className="text-red-500">{isError}</span>} */}
    </div>
  );
};

export default Login;
