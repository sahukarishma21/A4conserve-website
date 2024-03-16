import React from 'react';
import './Sidebar.css'; // Don't forget to create a corresponding CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
       
      </div>
      <ul className="sidebarList">
        <li className="sidebarListItem">Employee Onboarding</li>
        <li className="sidebarListItem">Compliance Training</li>
        <li className="sidebarListItem">Sales Enablement</li>
        <li className="sidebarListItem">Talent Development</li>
        <li className="sidebarListItem">Customer Education</li>
        <li className="sidebarListItem">Partner Enablement</li>
        <li className="sidebarListItem">Member Training</li>
      </ul>
    </div>
  );
};

export default Sidebar;