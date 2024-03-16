import React from "react";
import "./Topbar.css";
import {  FaComment, FaBell, FaSearch } from "react-icons/fa";
import { IoIosHelpCircle,IoMdSettings } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import Header from "../../Homepage/Header/Header";
export default function Topbar() {
  return (
    <div>
      <Header/>
    <div className="topbarContainer">
      <div className="topbarLeft">
        <IoReorderThree className="logo"/>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <FaSearch className="searchIcon" />
          <input
            placeholder="Search Content in the platform"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          {/* Add your links here if needed */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <IoIosHelpCircle />
            
          </div>
          <div className="topbarIconItem">
            <FaComment />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <IoMdSettings />
           
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}