import React from "react";
import Label from "../Label/Label";

const InputHeader = ({ children, name }) => {
  return (
    <div className="h-full w-full pl-8 pr-8 font-satoshi font-bold text-[16px] size_mobile">
      <Label name={name} />
      <div className="flex justify-between flex-col w-full">
        <div
          className="w-full gap-5 flex flex-wrap flex-col
        sm:flex-col sm:w-full  md:flex-row md:w-full lg:flex-row lg:w-full "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default InputHeader;
