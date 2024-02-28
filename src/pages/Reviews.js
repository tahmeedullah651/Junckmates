import React, { useEffect, useState } from "react";
import IconButton from "../components/Button/IconButton";
import { useFormik } from "formik";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loading/Loader";

const Reviews = () => {
  const reviewsData = useSelector((state) => state.reviews.data);
  const isLoading = useSelector((state) => state.reviews.isLoading);
  const isError = useSelector((state) => state.reviews.isError);
  console.log("reviews DAta", reviewsData);
  return (
    <div className="w-full h-screen my-3 rounded-lg px-4 ">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>Error: {isError}</div>
      ) : (
        <>
          <div className="mt-7 bg-emerald-100 rounded-md mb-3 dashboardTableWrapper">
            <table className="w-full min-w-[520px] border-collapse !overflow-x-auto ">
              <thead>
                <tr>
                  <th className="border text-left font-semibold py-5 px-2 pl-8">
                    Name
                  </th>
                  <th className="border text-left font-semibold py-5 px-2">
                    Reviews
                  </th>
                  <th className="border text-left font-semibold py-5 px-2">
                    Comment
                  </th>
                </tr>
              </thead>
              <tbody>
                {reviewsData.map((item, index) => (
                  <tr key={index}>
                    <td className="capitalize text-left px-8 text-sm py-2 max-w-[260px] min-w-[150px] text-ellipsis overflow-hidden flex gap-2">
                      <div className="flex justify-center items-center ">
                        <img
                          src={item?.userId?.photo}
                          alt="User"
                          className="w-[50px] h-[40px] rounded-full" // Apply border-radius for perfect circle
                        />
                      </div>
                      <div className="flex flex-col w-full font-satoshi font-medium justify-center">
                        {item?.userId?.firstName + " " + item?.userId?.lastName}
                        <span className="text-xs font-satoshi font-normal flex">
                          @{item?.userId?.firstName}
                        </span>
                      </div>
                    </td>
                    <td className="text-left px-1 text-sm py-2 capitalize">
                      <div className="flex items-center gap-[2px]">
                        {item?.rating}
                        <FaStar className="text-[9px] sm:text-[13px] text-yellow-300" />
                      </div>
                      {/* {item?.rating ? (
                        <div className="flex items-center gap-[2px]">
                          <FaStar className="text-[9px] sm:text-[13px] text-yellow-300" />
                        </div>
                      ) : null} */}
                    </td>
                    <td className="text-left px-1 text-sm py-2 capitalize">
                      {item?.comment}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Reviews;
