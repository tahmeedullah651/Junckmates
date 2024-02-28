import React, { useEffect } from "react";
import Card from "../components/Card/Card";
import { FaUserTie, FaRegUser } from "react-icons/fa";
import { TbCalendarCheck } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../redux/slices/dashboardSlice";
import Loader from "../components/Loading/Loader";

let Once = true;
const Dashboard = () => {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.dashbaord);
  const { isLoading, isError, data } = details;
  console.log("Dashboard data==>", data);
  useEffect(() => {
    if (Once) {
      Once = false;
      if (!data) {
        dispatch(fetchDashboardData());
      }
    }
  }, []);

  return (
    <>
      <div className="w-full h-full">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <div>{isError}</div>
        ) : (
          <div className="w-full flex flex-col flex-wrap gap-4 items-center px-5 md:flex-row md:justify-center pt-5">
            <Card
              name="No. of collectors"
              total={
                data?.collectors || 0
              } /* Assuming 'collectors' is a field in your userData */
              icon={<FaRegUser size={"30px"} />}
            />
            <Card
              name="No. of Users"
              total={
                data?.users || 0
              } /* Assuming 'users' is a field in your userData */
              icon={<FaUserTie size={"30px"} />}
            />
            <Card
              name="No. of  active bookings"
              total={data?.activeBookings || 0}
              icon={<TbCalendarCheck size={"42px"} />}
            />
            <Card
              name="No. of complete bookings"
              total={data?.completedBookings || 0}
              icon={<FaRegUser size={"30px"} />}
            />
            <Card
              name="No. of categories"
              total={data?.categories || 0}
              icon={<FaUserTie size={"30px"} />}
            />

            <Card
              name="No. of dumpster sizes"
              total={data?.DumpsterSizes || 0}
              icon={<TbCalendarCheck size={"30px"} />}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
