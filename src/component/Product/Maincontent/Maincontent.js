import React from "react";
import Post from '../Post/Post'
import "./Maincontent.css"; // Import your main content styles here

const Maincontent = () => {
  return (
    <div className="main-content">
      <Post/>
      {/* Add other main content components here */}
    </div>
  );
};

export default Maincontent;