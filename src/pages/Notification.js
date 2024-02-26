import React from "react";
import NotificationBtn from "../components/Button/NotificationBtn";

const Notification = () => {
  return (
    <div className="w-[80vw] pl-4 h-screen my-3 rounded-lg mx-auto">
      <div className="pb-3 flex gap-2 w-full items-center">
        <div className="flex flex-col w-[35vw] bg-red-200">
          <NotificationBtn
            type="radio"
            name="user"
            id="user"
            detail="All Users"
            description="Send a message to all the users in the system"
          />
        </div>
        <div className="flex flex-col">Notification</div>
      </div>
    </div>
  );
};

export default Notification;
