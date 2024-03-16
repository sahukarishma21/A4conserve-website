import React from 'react';
import './About.css';
import Header from '../Homepage/Header/Header';

const About = () => {

  return (
    <div>
      <Header/>
  <div>
    <h1 className='abouthead'>"We advise and develop sustainable solutions accross lives"</h1>
    <div className="company-info-container">
      <h2 className="company-vision">Vision</h2><br/>
      <p className='aboutpara'>To leverage technology to make quality learning accessible to every student from KG to PG.</p>
      <h2 className="company-mission">Mission</h2>
      <p className='aboutpara'>To empower students by making quality education affordable and readily available</p>
      <h2 className="company-goal">Goal</h2>
      <p className='aboutpara'>To deliver best business solutions by integrating people, processes and technologies to benefit all the stakeholders</p>
      
    </div>
    </div>
    </div>
  );
};


export default About;