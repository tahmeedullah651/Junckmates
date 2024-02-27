import React from "react";
import Label from "../Label/Label";

const InputHeader = ({ children, name }) => {
  return (
    <div className="h-full pl-2 w-full pr-8 font-satoshi font-bold text-[16px]">
      <Label name={name} />
      <div className="flex justify-between flex-col w-full">
        <div
          className="w-full gap-5 flex flex-wrap flex-col
        sm:flex-row sm:w-full  md:flex-row md:w-full lg:flex-row lg:w-full "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default InputHeader;
