import React from "react";
import { FaPlus } from "react-icons/fa";
const IconButton = ({ text, customClass, type }) => {
  return (
    <button
      className={`rounded-md flex justify-center items-center px-3 py-[9px] bg-emerald-400 gap-1 text-white text-sm ${customClass}`}
      type={type}
    >
      <FaPlus />
      <span> {text}</span>
    </button>
  );
};

export default IconButton;
