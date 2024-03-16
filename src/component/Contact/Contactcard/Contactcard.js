import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai'; 
import { MdOutlineHandshake , MdDomainVerification } from "react-icons/md";
import { FaUserTie } from 'react-icons/fa';// Importing the React icon
import './Contactcard.css'; // Import your CSS file for styling

const Contact = ({ title,contactdescription, description, contactInfo }) => {
  return (
    <div className="contact">
      <div className="contact-header">
       
        <h3>{title}</h3>
      </div>
      <br />
      <h4>{contactInfo}</h4>
      <br />
      <p className='contactdescr'>{contactdescription}</p>
     <br/>
      <div className="arrow">
      <p>{description}</p>
      &rarr;</div>
    </div>
  );
};

const Contactcard = () => {
  return (
    <div className="contact-container">
      <Contact
        title={<AiOutlineQuestionCircle />}
        contactdescription="For help,support and product updates"
        description="Visit our knowledge base"
        contactInfo="Support"
      />
      <Contact
        
        title={<MdOutlineHandshake />}
        contactdescription="For partnership programs and inquries"
        description="Visit our partner page"
        contactInfo="Partnership"
      />
      <Contact
       
        title={<FaUserTie />}
        contactdescription="For investors document and stock informaton"
        description="Visit our investor relations"
        contactInfo="Investor"
      />
      <Contact
        
    title={<MdDomainVerification />}
    contactdescription="Connect with sales to see our product in action "
        description="Book a demo"
        contactInfo="Book a demo"
      />
    </div>
  );
};

export default Contactcard;