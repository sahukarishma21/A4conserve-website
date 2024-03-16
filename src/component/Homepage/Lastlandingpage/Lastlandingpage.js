import { MdOutlineHorizontalRule } from "react-icons/md";
import React from 'react';
import './Lastlandingpage.css';
import ComImg from '../../../Assets/A4 CIRCLE.png';

function Landing() {
  return (
    <div className="lastheadcontainer">
      <header>
        <div className="lastheader-content">
          <div className="lastheader-box">
            <div className="lastheader-text">
              <h3 className="landingheadlast">Are you Searching for a<br/> Sustainable Consultant ?</h3>
             
            </div>
            <button className="lastget-started-button">Getting Started</button>
          </div>
        </div>
      </header>
      <div className="landingsections">
        <section className="landing-logo">
          <img src={ComImg} alt="Company Logo"  className="lastlogolandingpage"/>
          <div className="office-address">
            <div className="branch-office">
              <div className="branch-office2">
              <MdOutlineHorizontalRule size="2em" /> 
              <h3>Branch Office</h3></div>
              <p>E-8, CII (Centre for Innovation and Incubation), Utkal University, Vani Vihar, Bhubaneswar 751004, Odisha, INDIA.</p>
            </div>
            <div className="head-office">
              <div className="head-office2">
              <MdOutlineHorizontalRule size="2em" /> 
              <h3>Head Office</h3></div>
              <p>B#317, ARK Towers, Mayuri Nagar, Miyapur, Hyderabad 500049, Telangana, INDIA.</p>
            </div>
          </div>
        </section>
        <section className="landing-resources">
          <h2 className="heading2">Resources</h2>
          <ul className="last-ul">
            <li className="last-li">Documentation</li>
            <li className="last-li">Metrics</li>
            <li className="last-li">Enterprises</li>
            <li className="last-li">Prices</li>
          </ul>
        </section>
        <section className="landing-company">
          <h2 className="heading2">Company</h2>
          <ul className="last-ul">
            <li className="last-li">Home</li>
            <li className="last-li">About</li>
            <li className="last-li">Services</li>
            <li className="last-li">Products</li>
            <li className="last-li">Contact</li>
          </ul>
        </section>
        <section className="landing-last-social">
          <h2 className="heading2">Social</h2>
          <ul className="last-ul">
            <li className="last-li">Facebook</li>
            <li className="last-li">Twitter</li>
            <li className="last-li">LinkedIn</li>
            <li className="last-li">YouTube</li>
            <li className="last-li">Instagram</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Landing;