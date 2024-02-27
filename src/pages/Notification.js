import React from "react";
import NotificationBtn from "../components/Button/NotificationBtn";
import Input from "../components/Input/Input";
import { LoginSchema } from "../Schema";
import { useFormik } from "formik";

const Notification = () => {
  const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        email: "tahmeedullah651@gmail.com",
        password: "",
        role: "Admin",
      },
      validationSchema: LoginSchema,
      onSubmit: () => {},
    });
  return (
    <div className="w-[80vw] pl-4 h-auto my-3 rounded-lg mx-auto">
      <div className="pb-3 flex gap-2 md:w-full flex-col items-center mr-16 md:flex-row">
        <div className="flex flex-col w-full px-3 rounded md:w-1/3 bg-green-100 mt-4 gap-3 py-6">
          <NotificationBtn
            type="radio"
            name="user"
            id="user"
            detail="All Users"
            description="Send a message to all the users in the system"
          />
          <NotificationBtn
            type="radio"
            name="user"
            id="user"
            detail="All Collectors"
            description="Send a message to all the ollectors in the system"
          />{" "}
          <NotificationBtn
            type="radio"
            name="user"
            id="user"
            detail="All Customers"
            description="Send a message to all the customers in the system"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2 md:mx-5">
          <span className="font-bold">Title</span>
          <Input
            // label="Email"
            id="msg"
            name="msg"
            autoComplete="off"
            type="text"
            placeholder="abdullah@gmail.com"
            value={values.msg}
            onBlur={handleBlur}
            onChange={handleChange}
            touch={touched.msg}
            error={errors.msg}
            customClasses={"!w-full"}
          />
          <span className="font-bold py-2">Description</span>
          <textarea
            id="comment"
            rows="4"
            class="w-full px-1 py-1 text-sm text-gray-900 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          />
          <button
            className="rounded-md flex justify-center items-center p-2.5 bg-emerald-400 gap-1 text-white w-full"
            type="submit"
            // disabled={isLoading}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
