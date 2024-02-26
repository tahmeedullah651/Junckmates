import React from "react";
import InputSmall from "../components/Input/InputSmall";
import { useFormik } from "formik";
import { changePasswordSchema } from "../Schema";
import { useDispatch, useSelector } from "react-redux";
import { newPassword } from "../redux/slices/newPasswordSlice";
import InputPassword from "../components/Input/InputPassword";
import { currentPassword } from "../redux/slices/currentPasswordSlice";
const Settings = () => {
  const data = useSelector((state) => state.auth);
  console.log("data auth", data.currentUser.data._id);
  const dispatch = useDispatch();
  const { values, handleBlur, handleSubmit, handleChange, touched, errors } =
    useFormik({
      initialValues: {
        password: "",
        currentPassword: "",
      },
      validationSchema: changePasswordSchema,
      onSubmit: () => {
        console.log(
          "password",
          data.currentUser.data._id,
          values.password,
          values.currentPassword
        );
        dispatch(
          currentPassword({
            password: values.password,
            currentPassword: values.currentPassword,
            userId: data.currentUser.data._id,
          })
        )
          .then((res) => {
            console.log("res newPassword", res);
            // if (res.type === "otp/fulfilled") {
            //   navigate("/new_password");
            // }
          })
          .catch((err) => {
            console.log("error ===>", err);
          });
      },
    });
  return (
    <div className="flex w-[95%] ">
      <form onSubmit={handleSubmit}>
        <div className="w-full flex justify-start gap-3 flex-col md:flex-row">
          <div>
            <InputPassword
              label="Current Password"
              id="currentPassword"
              name="currentPassword"
              autoComplete="off"
              type="password"
              placeholder="Add Current Password"
              value={values.currentPassword}
              onBlur={handleBlur}
              onChange={handleChange}
              touch={touched.currentPassword}
              error={errors.currentPassword}
              customClasses={"!w-[250px]"}
            />
          </div>
          <div>
            <InputPassword
              label="New Password"
              id="password"
              name="password"
              autoComplete="off"
              type="password"
              placeholder="Add New Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              touch={touched.password}
              error={errors.password}
              customClasses={"!w-[250px]"}
            />
          </div>
        </div>
        <div className="pt-2">
          <button
            className="rounded-md flex justify-center items-center px-6 py-2 bg-emerald-400 gap-1 text-white text-sm"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;

// import React from "react";
// import SettingWrapper from "../components/Wrapper/SettingWrapper";
// import InputHeader from "../components/Input/InputHeader";
// import Label from "../components/Label/Label";
// import Input from "../components/Input/Input";
// const Settings = () => {
//   return (
//     <SettingWrapper>
//       <form>
//         <InputHeader name="Your Details">
//           <Input
//             label="Name"
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Abdullah Shah"
//           />
//           <Input
//             label="Mobile"
//             id="mobile"
//             name="mobile"
//             type="Number"
//             placeholder="00924789"
//           />
//           <Input
//             label="Email"
//             id="email"
//             name="email"
//             type="email"
//             placeholder="abdullah@gmail.com"
//           />
//           <Input
//             label="vehicle Reg No"
//             id="vehicle"
//             name="vehicle"
//             type="Number"
//             placeholder="00924789"
//           />
//         </InputHeader>
//         <InputHeader name="Operational Center">
//           <Input
//             label="Post Code"
//             id="postCode"
//             name="postCode"
//             type="Number"
//             placeholder="12200"
//           />

//           <Input
//             label="Operating Radius"
//             id="mobile"
//             name="mobile"
//             type="Number"
//             placeholder="5km-100km"
//           />
//         </InputHeader>
//         <InputHeader name="Waste Carrier Details">
//           <Input
//             label="License Number
//             "
//             id="LicenseNumber"
//             name="LicenseNumber"
//             type="Number"
//             placeholder="451242141299124"
//           />
//           <Input
//             label="Trading Name"
//             id="TradingName"
//             name="TradingName"
//             type="text"
//             placeholder="Abdullah"
//           />
//           <Input
//             label="Vat Number"
//             id="VatNumber"
//             name="VatNumber"
//             type="Number"
//             placeholder="87213y2183"
//           />
//         </InputHeader>
//         <InputHeader name="Disposal Sites">
//           <Input
//             label="Name"
//             id="name"
//             name="name"
//             type="text"
//             placeholder="Enter your name"
//           />
//           <Input
//             label="License Number"
//             id="LicenseNumber"
//             name="LicenseNumber"
//             type="Number"
//             placeholder="87213y2183"
//           />
//           <Input
//             label="Post Code"
//             id="postCode"
//             name="postCode"
//             type="Number"
//             placeholder="87213y2183"
//           />
//         </InputHeader>
//         <InputHeader name="Account Info">
//           <Input
//             label="Account Holder Name"
//             id="name"
//             name="name"
//             type="Number"
//             placeholder="  Abdullah "
//           />
//           <Input
//             label=" Account No"
//             id="accountNo"
//             name="accountNo"
//             type="Number"
//             placeholder="0912399933854"
//           />
//         </InputHeader>
//         <div className="pl-8 pr-6 pb-28">
//           <Label name="Status" />
//           <div className="flex gap-2 mb-2">
//             <button className="bg-emerald-400  px-3 py-1 rounded">
//               Approved
//             </button>
//             <button className="bg-emerald-400  px-3 py-1 rounded">Block</button>
//           </div>
//           <button className="bg-emerald-400  px-12 py-1 rounded mb-10">
//             Save
//           </button>
//         </div>
//       </form>
//     </SettingWrapper>
//   );
// };

// export default Settings;
