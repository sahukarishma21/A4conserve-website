import React from "react";
import Image from "../../Assets/office.png";
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container"></div>
        <div className="home-text-section">
          <h3 className="primary-heading">
           SUSTAINABLE
          </h3>
          <h1 className="heading">Consultants, for all your needs</h1>
          <p className="primary-text">
            A4Conserv seeks to build an economically sustainable society by making innovation contributions in the field of Education, Health & Circular Economy.
          </p>
        
        </div>
        <div className="home-image-section">
          <img src={Image} alt=""  className="homeimage"/>
        </div>
      </div>
    </div>
  );
};

export default Home;