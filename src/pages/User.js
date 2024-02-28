import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/userSlice";
import { fetchDetailsData } from "../redux/slices/detailSlice";
import Loader from "../components/Loading/Loader";
import { Link } from "react-router-dom";
import { changeStatusById } from "../redux/slices/userSlice";
import StatusLoading from "../components/Button/StatusButton";

let Once = true;
const User = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.user);
  const [buttonload, setButtonload] = useState({
    id: null,
    load: false,
  });
  console.log("User", details);

  const { isLoading, isError, data } = details;

  useEffect(() => {
    if (Once) {
      Once = false;
      if (!data) {
        dispatch(fetchUserData());
      }
    }
  }, []);
  const getUserById = (id) => {
    dispatch(fetchDetailsData(id))
      .then((res) => {
        console.log("Response details Data==>", res);
      })
      .catch((err) => {
        console.log("error details ===>", err);
      });
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
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div>{isError}</div>
      ) : (
        <div
          className="mt-7 bg-emerald-100 px-3
         rounded-md mx-8 mb-3 dashboardTableWrapper"
        >
          <table className="w-full mr-6 sm:mr-0 min-w-[850px] border-collapse !overflow-x-auto ">
            <thead className="">
              <tr className="mb-4 pb-4 text-zinc-500 font-satoshi font-medium text-[16px] border-b-2">
                <th className="text-left pl-10 font-[600] text-[16px] py-5 px-2 ">
                  Name
                </th>
                <th className="text-left font-[600] text-[16px] py-5 px-2 ">
                  Email
                </th>

                <th className="text-[--gray] font-[600] text-[16px] py-5 px-2 ">
                  Active
                </th>
                <th className="text-[--gray] font-[600] text-[16px] py-5 px-2 ">
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
                        {/* {rowData.name} */}
                        <Link
                          to="/detail"
                          onClick={() => getUserById(item?._id)}
                          className=" capitalize text-left px-8 text-sm py-2 max-w-[260px] min-w-[150px] text-ellipsis overflow-hidden flex gap-2"
                        >
                          <div className="flex justify-center items-center">
                            <img
                              // src={item?.photo}
                              src={`https://api.junkmates.app/${item?.photo}`}
                              // src={`https://api.junkmates.app/${photo}`}
                              alt="User"
                              className="w-[50px] h-[40px] rounded-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col w-full font-satoshi font-bold justify-center">
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
                      <td className="text-center px-1 text-sm py-2 capitalize ">
                        {item?.bookedOrdersCount}
                      </td>
                      <td className=" text-center px-2 text-sm py-2 capitalize">
                        {item?.completedOrdersCount}
                      </td>
                      <td className="  px-2 text-sm py-2 capitalize text-left">
                        {buttonload.load && buttonload.id === item._id ? (
                          <StatusLoading
                            customClasses={
                              "!w-[80px] !h-[40px]  !text-[11px] !font-bold !rounded-md sm:!text-[12px]"
                            }
                          />
                        ) : (
                          <button
                            className="bg-emerald-400 text-white w-[80px] h-[40px]  rounded-md"
                            onClick={() => changeStatus(item?._id)}
                          >
                            {item?.active ? "Block" : "UnBlock"}
                          </button>
                        )}
                        {/* <button
                          className="bg-emerald-400 ml-2 px-4 py-2 rounded-md"
                          onClick={() => changeStatus(item?._id)}
                        >
                          {item?.active ? "UnBlock" : "Block"}
                        </button> */}
                        {/* (buttonload.load && buttonload.id ===item._id) */}
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

export default User;
