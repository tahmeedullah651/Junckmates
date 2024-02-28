import React, { useEffect, useState } from "react";
import User from "../assets/images/image.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusById,
  fetchCollectorData,
} from "../redux/slices/collectorSlice";
import Loader from "../components/Loading/Loader";
import { Link } from "react-router-dom";
import { fetchDetailsData } from "../redux/slices/detailSlice";
import { fetchReviewsData } from "../redux/slices/reviewsSlice";
import StatusLoading from "../components/Button/StatusButton";
import { FaStar } from "react-icons/fa";
let Once = true;
const Collector = () => {
  const [buttonload, setButtonload] = useState({
    id: null,
    load: false,
  });
  const dispatch = useDispatch();
  const details = useSelector((state) => state.collector);
  const { isLoading, isError, data } = details;
  console.log("Collector", details);
  useEffect(() => {
    if (Once) {
      Once = false;
      if (!data) {
        dispatch(fetchCollectorData());
      }
    }
  }, []);
  // Function to calculate the average rating for a set of reviews
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      return 0; // No reviews, return 0 as the average
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    // Round the average rating to 1 decimal place
    return Math.round(averageRating * 10) / 10;
  };
  const getReviewsId = (id) => {
    dispatch(fetchReviewsData(id))
      .then((res) => {
        console.log("Response details Data==>", res);
      })
      .catch((err) => {
        console.log("error details ===>", err);
      });
    console.log("user id", id);
  };
  const getUserById = (id) => {
    dispatch(fetchDetailsData(id))
      .then((res) => {
        console.log("Response details Data==>", res);
      })
      .catch((err) => {
        console.log("error details ===>", err);
      });
    console.log("user id", id);
  };
  const changeStatus = (id) => {
    setButtonload({
      id: id,
      load: true,
    });
    dispatch(changeStatusById(id))
      .then((res) => {
        setButtonload({
          id: null,
          load: false,
        });
        console.log("Response status Data==>", res);
      })
      .catch((err) => {
        console.log("error details ===>", err);
      });
    console.log("user id", id);
  };
  return (
    // <div className="w-full h-screen mx-4 my-3 p-3 rounded-lg overflow-x-auto">
    //   <Table />
    // </div>
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>{isError}</div>
      ) : (
        <div className="mt-7 bg-emerald-100 rounded-md px-3 mx-8 mb-3 dashboardTableWrapper">
          <table className="w-full mr-2 sm:mr-0 min-w-[850px] border-collapse !overflow-x-auto ">
            <thead className="">
              <tr className="mb-4 pb-4 text-zinc-500 font-satoshi font-medium text-[16px] border-b-2">
                <th className="text-left pl-10 font-[600] text-[16px] py-5 px-2 ">
                  Name
                </th>
                <th className="text-left font-[600] text-[16px] py-5 px-2 ">
                  Email
                </th>
                <th className="text-left font-[600] text-[16px] py-5 px-2 ">
                  Reviews
                </th>
                {/* <th className="text-[--gray] font-[600] text-[16px] py-5 px-2 ">
                  Review
                </th> */}
                <th className="text-left  font-[600] text-[16px] py-5 px-2 ">
                  Active
                </th>
                <th className="text-left font-[600] text-[16px] py-5 px-2 ">
                  Complete
                </th>
                <th className="text-left font-[600] text-[16px] py-5 px-2 ">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length &&
                data.map((item, index) => {
                  return (
                    <tr key={index} className="border-b-2">
                      <td>
                        <Link
                          to="/detail"
                          onClick={() => getUserById(item?._id)}
                          className="capitalize text-left px-8 text-sm py-2 max-w-[260px] min-w-[150px] text-ellipsis overflow-hidden flex gap-2"
                        >
                          <div className="flex justify-center items-center ">
                            <img
                              src={
                                `https://api.junkmates.app/${item?.photo}` ||
                                User
                              }
                              alt="User"
                              className="w-[50px] h-[40px] rounded-full" // Apply border-radius for perfect circle
                            />
                          </div>
                          <div className="flex flex-col w-full font-satoshi font-medium justify-center">
                            {item?.firstName + " " + item?.lastName}
                            <span className="text-xs font-satoshi font-normal flex">
                              @{item?.firstName}
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td
                        onClick={(e) => {
                          if (e.target.classList.contains("max-w-[160px]")) {
                            e.target.classList.remove("max-w-[160px]");
                            e.target.classList.add("max-w-max");
                          } else {
                            e.target.classList.remove("max-w-max");
                            e.target.classList.add("max-w-[160px]");
                          }
                        }}
                        className=" text-left px-2 text-sm py-2 max-w-[160px] text-ellipsis overflow-hidden"
                      >
                        {item?.email}
                      </td>
                      <td className="text-center px-1 text-sm py-2 capitalize">
                        <Link
                          to="/reviews"
                          onClick={() => getReviewsId(item?._id)}
                        >
                          {item?.reviews ? (
                            <div className="flex items-center gap-[2px]">
                              {calculateAverageRating(item.reviews)}{" "}
                              <FaStar className="text-[9px] sm:text-[13px] text-yellow-300" />
                            </div>
                          ) : null}
                        </Link>
                      </td>
                      <td className="text-center px-1 text-sm py-2 capitalize">
                        {item?.bookedOrdersCount}
                      </td>
                      <td className=" text-center px-2 text-sm py-2 capitalize">
                        {item?.completedOrdersCount}
                      </td>
                      <td className="  px-2 text-sm py-2 capitalize text-left">
                        {buttonload.load && buttonload.id === item._id ? (
                          <StatusLoading
                            customClasses={
                              "!w-[80px] !h-[40px] !text-[11px] !font-bold !rounded-md sm:!text-[12px]"
                            }
                          />
                        ) : (
                          <button
                            className="bg-emerald-400 w-[80px] text-white h-[40px]  rounded-md"
                            onClick={() => changeStatus(item?._id)}
                          >
                            {item?.active ? "Block" : "UnBlock"}
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Collector;
