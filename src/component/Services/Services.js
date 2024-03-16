import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css'
import Header from '../Homepage/Header/Header';

// Define custom arrow components
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
};

// Slider settings with custom arrows
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
};

// Slider data
const sliderData = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Education',
    description: ' A4ConServ work in the fields of Education  and Environment creating a sustainable atmosphere. A4ConServ believe in Circular Economy and Innovation for conserving resources.'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4406352/pexels-photo-4406352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Health',
    description: 'A4Con Services Private Limited is a Sustainable Solution provider working 17 SDGs laid down by UN.We work in the fields of health and Environment creating a sustainable atmosphere. '
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/730647/pexels-photo-730647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Rurban',
    description: 'Believe in Circular Economy and Innovation for conserving resources .one of the fastest growing Management Consulting Firm in India,offering innovative sustainable solutions to our customers.'
  },

];

// Slider component
const Services = () => {
  return (
    <div>
      <Header/>
    <div>
    <h1 className='servehead'>SUSTAINABLE SOLUTIONS</h1>
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="slider-item">
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p className='para'>{slide.description}</p>
            <div className='butt'>
            <button className='demoedit'>Demo</button>
            <button className='codeedit'>Code</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
    </div>
  );
};

export default Services;