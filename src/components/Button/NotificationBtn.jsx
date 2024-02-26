import React from "react";

const NotificationBtn = ({ name, id, detail, type, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div>
        <input type={type} name={name} id={id} />
      </div>
      <div className="flex flex-col">
        <h2 className="font-satoshi font-bold text-lg">{detail}</h2>
        <p className="font-satoshi font-normal text-sm text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default NotificationBtn;
