import React, { useContext, useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";
// DATA FILE
// import { SidebarData } from './slidebarData.js';

// STYLES
import "../stylesheets/navbar.css";
import { AuthContext } from "../context/authContext.js";

export default function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(237, 199, 137)" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}

            <li className="nav-text">
              <Link to="/">
                <AiIcons.AiFillHome />
                <span style={{ textDecoration: "none" }}>Home</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/user">
                <FaIcons.FaHatCowboy />
                <span style={{ textDecoration: "none" }}>
                  {currentUser? currentUser.username : "User"}
                </span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/map">
                <IoIcons.IoIosMap />
                <span style={{ textDecoration: "none" }}>Map</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/rules">
                <IoIcons.IoIosPaper />
                <span style={{ textDecoration: "none" }}>Rules</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/terms">
                <AiIcons.AiFillProfile />
                <span style={{ textDecoration: "none" }}>Terms</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="/leaderboard">
                <FaIcons.FaAtlassian />
                <span style={{ textDecoration: "none" }}>Leaderboard</span>
              </Link>
            </li>
            <li className="nav-text">
               {/* {currentUser? <AiIcons.AiOutlineLogout style={{width:"50px", paddingLeft:"7px"}}/>:<AiIcons.AiOutlineLogin />} */}
               {currentUser?<span style={{ textDecoration: "none"}} onClick={logout} className="loginlogout"> <AiIcons.AiOutlineLogout />&nbsp;&nbsp;&nbsp;Logout</span>:<Link to="/login"><span style={{ textDecoration: "none" , marginLeft:"0px"}}><AiIcons.AiOutlineLogin /> &nbsp;&nbsp;&nbsp;Login </span></Link>}      
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
