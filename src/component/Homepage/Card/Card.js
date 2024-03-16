import React from "react";
import "./Card.css";
import Img1 from '../../../Assets/image1.png';
import Img2 from '../../../Assets/Image2.png';
import Img3 from '../../../Assets/image3.png';

export default function Card() {
  return (
    <section id="Card" className="cardCard_section">
      
      <div className="container Card__container">
        <article className="Card__items">
          <div className="Card__item-image">
          <img src={Img1} alt="IMG1" />
          </div>
          <h3>HEALTH </h3>
          <p>
          A4Con Services Private Limited is a Sustainable Solution provider
           working 17 SDGs laid down by UN. We work in the fields of 
            health and Environment creating a sustainable atmosphere. 

          </p>
          <div className="Card__item-cta">
            
          </div>
        </article>
        <article className="Card__items">
          <div className="Card__item-image">
          <img src={Img2} alt="IMG2" />
          </div>
          <h3>EDUCATION </h3>
          <p>
         A4ConServ work in the fields of Education  and Environment 
         creating a sustainable atmosphere. A4ConServ believe in Circular Economy
          and Innovation for conserving resources.
          </p>
          <div className="Card__item-cta">
            
          </div>
        </article>
        <article className="Card__items">
          <div className="Card__item-image">
          <img src={Img3} alt="IMG3" />
          </div>
          <h3>RURBAN </h3>
          <p>
          Believe in Circular Economy and Innovation for conserving resources.
        one of the fastest growing Management Consulting Firm in India, offering
         innovative sustainable solutions to our customers.
          </p>
          <div className="Card__item-cta">
            
          </div>
        </article>      
      </div>
    </section>
  );
}