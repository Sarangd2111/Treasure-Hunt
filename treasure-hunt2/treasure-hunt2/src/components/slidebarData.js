import React, {useContext} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title:"Captain",
    path:"/",
    icon :<FaIcons.FaHatCowboy/>,
    cName: "nav-text" 
  },
  {
    title: "Rules",
    path: "/rules",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "Map",
    path: "/map",
    icon: <IoIcons.IoIosMap />,
    cName: "nav-text"
  },
  {
    title: "Terms",
    path: "/terms",
    icon: <AiIcons.AiFillProfile/>,
    cName: "nav-text"
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineLogin />,
    cName: "nav-text"
  },
  
];
