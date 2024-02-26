import React from "react";
import { TableData } from "../Data/TableData";
import User from "../assets/images/image.jpeg";

const Table = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full bg-emerald-100 px-4 py-2 rounded-md">
        <table className="w-full border-collapse bg-emerald-100 px-5">
          <thead>
            <tr className="mb-4 pb-4 text-zinc-500 font-satoshi font-medium text-[16px] border-1">
              <th className="text-sm font-semibold ml-3 pb-3">Name</th>
              <th className="text-sm font-semibold">Email</th>
              <th className="text-sm font-semibold">Reviews</th>
              <th className="text-sm font-semibold">Active Orders</th>
              <th className="text-sm font-semibold ">Complete Orders</th>
              <th className="text-sm font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((val, key) => {
              return (
                <tr key={key}>
                  <td className="ml-4 text-sm p-4">
                    <div className="w-12 h-12 flex gap-1">
                      <img
                        src={User}
                        alt="User"
                        className="w-full rounded-full"
                      />
                      <div className="flex flex-col w-full font-satoshi font-medium">
                        {val.name}
                        <span className="text-xs font-satoshi font-normal">
                          @{val.name}
                        </span>
                      </div>
                    </div>
                    {/* <div>
                      {val.picture}
                      <div>
                        {val.name}
                        <span>@{val.name}</span>
                      </div>
                    </div> */}
                  </td>
                  {/* <td className="ml-4 text-sm">{val.picture}</td> */}
                  <td className="p-3 text-sm">{val.email}</td>
                  <td className="p-3 text-sm">{val.Review}</td>
                  <td className="p-3 text-sm">{val.Active}</td>
                  <td className="p-3 text-sm">{val.complete}</td>
                  <td className="p-3 text-sm text-white">
                    <div className="flex gap-2 w-full justify-end">
                      {val.status === "Approved" ? (
                        <button className="bg-emerald-400  px-4 py-2 rounded-md">
                          Approved
                        </button>
                      ) : (
                        <button className="border-2 border-emerald-400  px-4 py-2 rounded-md text-emerald-400 ">
                          Un Approved
                        </button>
                      )}

                      <button className="bg-emerald-400  px-4 py-2 rounded-md">
                        Block
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
