import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Recognized.css'

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
    image: 'https://startupodisha.gov.in/wp-content/uploads/2021/04/logo.png',
    title: 'Recognized by Govt of odisha',
    description: ''
  },
  {
    id: 2,
    image: 'https://e7.pngegg.com/pngimages/725/47/png-clipart-government-of-india-ministry-of-micro-small-and-medium-enterprises-small-business-india-text-logo.png',
    title: 'Recognized by MSME',
    description: ''
  },
  {
    id: 3,
    image: 'https://getlogo.net/wp-content/uploads/2019/12/startup-india-hub-logo-vector.png',
    title: 'Recognized by Startup India',
    description: ''
  },

];

// Slider component
const Recognized = () => {
  return (
    <div>
    <h1 className='reco'>Recognized by</h1>
    <div className="slider-container">
      <Slider {...sliderSettings}>
        {sliderData.map((slide) => (
          <div key={slide.id} className="slider-item">
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Recognized;