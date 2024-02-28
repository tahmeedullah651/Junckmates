import React from "react";

const Card = ({ icon, name, total }) => {
  return (
    <div className="w-[220px] h-44 mr-8 sm:w-[300px] sm:h-56 md:w-[300px] md:h-56 lg:w-[300px] lg:h-56 flex flex-col gap-2 rounded-md items-center justify-center shadow-md bg-white">
      <div className=" text-white flex justify-center items-center  w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-16 lg:h-16  bg-[#1fdb8381] rounded-full">
        {icon}
      </div>

      <p className="text-base sm:text-xl md:text-xl lg:text-xl font-normal text-[#4F4F4F]">
        {" "}
        {name}
      </p>
      <h2 className="font-black text-2xl sm:text-3xl md:text-3xl lg:text-3xl">
        {total}
      </h2>
    </div>
  );
};

export default Card;
