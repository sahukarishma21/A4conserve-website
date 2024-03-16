import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import { GiSpeedometer } from 'react-icons/gi';
import './Meter.css'
const Meter= () => {
  return (
    <div className="avant-innovative">
      <div className="speedometer-icon">
        <GiSpeedometer  size="250" color='lightgreen' /></div>
     
      <div className="features">
        <div className="feature">
          <FaRegLightbulb size="24" />
          <h3>Avant-innovative</h3>
          <p>
            We innovate according to our client's corporate strategic plan to create a
            seamless sustainable experience.
          </p>
        </div>
        <div className="feature">
          <FaRegLightbulb size="24" />
          <h3>Agile</h3>
          <p>
            We manage and drive change to create synergy between thoughts innovation and
            sustainability.
          </p>
        </div>
        <div className="feature">
          <FaRegLightbulb size="24" />
          <h3>Adaptable </h3>
          <p>
            We provide innovative and sustainable solutions which are easily adaptable and
            feasible.
          </p>
        </div>
        <div className="feature">
          <FaRegLightbulb size="24" />
          <h3>Allegiant</h3>
          <p>
            We are loyal towards our clients, customers as well as to the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Meter;