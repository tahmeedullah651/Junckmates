import React from "react";

const InputWrapper = ({ customclasses, children }) => {
  return (
    <div
      className={`w-full flex justify-between flex-row items-center flex-wrap gap-4 ${customclasses}`}
    >
      {children}
    </div>
  );
};

export default InputWrapper;
