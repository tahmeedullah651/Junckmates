import React from "react";

const InputSmall = ({
  label,
  id,
  placeholder,
  type,
  name,
  value,
  onChange,
  customClasses,
  onBlur,
  error,
  touch,
  disable,
}) => {
  return (
    <div className={`flex-grow basis-48 ${customClasses}`}>
      <label
        htmlFor={id}
        className="block mb-1 pl-[2px] font-medium text-[14px] capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-md focus:border-gray-800 block w-full px-2.5 py-2 "
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disable}
      />
      {error && touch ? (
        <span className="text-[12px] md:text-[14px] text-red-500 ml-3 mt-1">
          {error}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputSmall;
