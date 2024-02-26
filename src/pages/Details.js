import React from "react";
import SettingWrapper from "../components/Wrapper/SettingWrapper";
import InputHeader from "../components/Input/InputHeader";
import Input from "../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loading/Loader";

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detail.data);
  const isLoading = useSelector((state) => state.detail.isLoading);
  const isError = useSelector((state) => state.detail.isError);
  console.log("details", data);
  // {isLoading ? (
  //   <Loader />
  // ) : isError ? (
  //   <div>Error:{isError}</div>
  // ) : (
  return (
    <div className="w-full h-screen my-3 rounded-lg px-4 ">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error is: {isError}</div>
      ) : (
        <>
          <SettingWrapper profile={data?.photo}>
            <form>
              <InputHeader name="Your Details">
                <Input
                  label="First Name"
                  id="firstname"
                  name="firstname"
                  value={data?.firstName}
                  type="text"
                  placeholder="Abdullah Shah"
                />
                <Input
                  label="Last Name"
                  id="lastname"
                  name="lastname"
                  value={data?.lastName}
                  type="text"
                  placeholder="Abdullah Shah"
                />
                <Input
                  label="Mobile"
                  id="phone"
                  name="phone"
                  value={data?.phone}
                  type="Number"
                  placeholder="00924789"
                />
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  value={data?.email}
                  type="email"
                  placeholder="abdullah@gmail.com"
                />
                <Input
                  label="post Code"
                  id="postcode"
                  name="postcode"
                  type="Number"
                  value={data?.postcode}
                  placeholder="00924789"
                />
              </InputHeader>
            </form>
          </SettingWrapper>
        </>
      )}
    </div>
  );
};

export default Details;
