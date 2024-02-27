import React from "react";

const Input = ({
  type,
  name,
  id,
  placeholder,
  label,
  autoComplete,
  customClasses,
  value,
  onChange,
  onBlur,
  error,
  touch,
}) => {
  return (
    <div className={`size flex gap-1 flex-col w-[30vw] ${customClasses} `}>
      <label
        htmlFor={id}
        className="text-sm font-satoshi  block mb-1 pl-[2px] font-medium capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`overflow-hidden  border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:border-gray-800 block w-full 
        p-2.5 ${customClasses}`}
      />
      {error && touch ? (
        <span className="text-[12px] md:text-[14px] text-red-500 ml-3 mt-1">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default Input;
