import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarData from "../../Data/SidebarData";
import { GoSignOut } from "react-icons/go";
const Sidebar = () => {
  const location = useLocation();
  const signOutAdmin = () => {
    console.log("SignOutAdmin function called");
    localStorage.removeItem("Admintoken");
    window.location.href = "/login";
  };
  return (
    <div className="bg-emerald-500 fixed z-50 top-0 left-0 pt-28 px-4 h-screen w-[120px] md:w-[20%]">
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li className="flex" key={index}>
              <NavLink
                to={item.url}
                className={`${
                  // flex item-center gap-2 py-2 text-sm px-5 mb-2 rounded-xl
                  location.pathname === item.url
                    ? "bg-white text-black"
                    : "text-white hover:bg-gray-200 hover:text-black transition-all ease-in-out duration-300 "
                }
          capitalize pl-2 gap-1 bg-white-400 relative rounded-md w-full py-2 text-base sm:text-lg md:text-sm font-medium flex justify-start items-center flex-col xl:pl-3 mb-2 sm:flex-col md:flex-row lg:flex-row 
          `}
              >
                {item.icon}
                <span className="pl-0 xl:pl-2 text-xs md:text-xs lg:text-sm font-satoshi font-bold text-center">
                  {item.label}
                </span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => signOutAdmin()}
        className="capitalize pl-2 gap-1 bg-white-400 relative rounded-md w-full py-2 text-base sm:text-lg md:text-sm font-medium flex justify-start items-center flex-col xl:pl-3 mb-2 sm:flex-col md:flex-row lg:flex-row"
      >
        <GoSignOut className="text-red-600 mr-1" />
        <button className="text-red-600 text-[12px] md:text-[16px] font-satoshi font-bold py-2">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
