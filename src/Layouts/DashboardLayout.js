// import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export default function DashboardLayout() {
  //   const [drawerWidth, setDrawerWidth] = useState(15);

  return (
    <section className="w-screen h-screen">
      <Header />
      <Sidebar />
      <div className="flex justify-center items-start w-screen min-h-screen">
        <div className="h-screen min-w-[160px] md:w-[20%]"></div>
        <div className="w-[90%] md:w-[80%] flex justify-center items-start">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
