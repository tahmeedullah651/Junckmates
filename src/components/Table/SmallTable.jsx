import React from "react";
import { data } from "../Data/SmallTableData";

const SmallTable = () => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-full bg-emerald-100  px-4 py-2 rounded-md">
        <table className="w-full border-collapse bg-emerald-100 px-5">
          <thead>
            <tr className="mb-4 pb-4 text-zinc-500 font-satoshi font-medium text-[16px] ">
              <th classname="text-sm font-semibold ml-3 pb-3">S.No</th>
              <th classname="text-sm font-semibold pr-3">Dumpster Sizes</th>
              <th classname="text-sm font-semibold pr-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td className="p-3 text-sm">{val.SNo}</td>
                  <td className="p-3 text-sm">{val.size}</td>
                  <td className="p-3 text-sm">
                    <div className="flex gap-2 w-full justify-center">
                      <button className="bg-emerald-400 text-white  px-4 py-2 rounded-md">
                        Edit
                      </button>
                      <button className="text-emerald-400 border-[2px] border-emerald-400 px-4 py-2 rounded-md">
                        Delete
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

export default SmallTable;
