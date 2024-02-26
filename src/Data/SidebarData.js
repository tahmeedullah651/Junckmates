import React from "react";
import { FaUserTie, FaRegUser } from "react-icons/fa";
import { BsColumnsGap, BsBoxSeam } from "react-icons/bs";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { MdOutlineSettings } from "react-icons/md";
export const SidebarData = [
  {
    label: "Dashboard",
    icon: <BsColumnsGap />,
    url: "/",
  },
  {
    label: "Collector",
    icon: <FaRegUser />,
    url: "/collector",
  },
  {
    label: "User",
    icon: <FaUserTie />,
    url: "/user",
  },
  {
    label: "Dumpster sizes",
    icon: <VscFileSymlinkDirectory />,
    url: "/dumpster-size",
  },
  {
    label: "Junk Categories",
    icon: <BsBoxSeam />,
    url: "/junk-categories",
  },
  // {
  //   label: "Notification",
  //   icon: <MdOutlineSettings />,
  //   url: "/notification",
  // },
  {
    label: "Settings",
    icon: <MdOutlineSettings />,
    url: "/settings",
  },
];

export default SidebarData;
