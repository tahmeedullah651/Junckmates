import React, { useState } from "react";

const InputPassword = ({
  label,
  placeholder,
  name,
  value,
  id,
  onChange,
  onBlur,
  error,
  touch,
  autoComplete,
  customClasses,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className={`relative w-full ${customClasses}`}>
      <label
        htmlFor={id}
        className="block mb-1 pl-[2px] font-medium text-[14px] capitalize"
      >
        {label}
      </label>
      <input
        id={id}
        onChange={onChange}
        name={name}
        value={value}
        type={isPasswordVisible ? "text" : "password"}
        placeholder={placeholder}
        onBlur={onBlur}
        className=" border border-gray-300 outline-none text-gray-900 sm:text-sm rounded-lg focus:border-gray-800 block w-full p-2.5 "
      />
      <button
        type="button"
        className={`absolute flex items-center px-4 text-gray-600 ${
          error && touch ? "passwordIcon" : "passwordIconCenter"
        }`}
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        )}
      </button>
      {error && touch ? (
        <span className="text-[12px] md:text-[14px] text-red-500 ml-3 mt-1">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default InputPassword;
