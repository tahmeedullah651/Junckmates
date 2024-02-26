// import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function PasswordLayout() {
  //   const [drawerWidth, setDrawerWidth] = useState(15);

  return (
    <section className="w-screen h-screen">
      <Header />
      <div className="flex justify-center items-start w-screen min-h-screen">
        <div className="w-[80%] flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
