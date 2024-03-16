import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Reliablepartner.css'

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
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
};

// Slider data
const sliderData = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9_xcCv1qmCmOWYMrj769pe9aXqR-oZTqYA&usqp=CAU',
    title: '',
    description: ''
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkZSTtiFgCeDw9qWVfYqAHk93UtUkCTWyYaF3li8DBfA&s',
    title: 'Chandrasekhar Academy Japan',
    description: ''
  },
  {
    id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnrWOQn0o9Q7ALeY5jyubyglFydfa9y9-nw&usqp=CAU',
    title: 'Pharos Tech solution',
    description: ''
  },
  {
    id: 4,
    image: 'https://images.squarespace-cdn.com/content/5e553dad7e14610a3e7a0a3b/1582645058470-37NO93JU1H3HW1GDTTF8/MG_Text_Logo_Black.png?format=1500w&content-type=image%2Fpng',
    title: 'Marketing Guru,Berhampur,Odisha',
    description: ''
  },
  {
    id: 5,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJr_QoyWN-w7t8BIDhLE4Ogq_KQQHxFbvdhKGMYW69JA&s',
    title: 'FeePad,Hyderbad,Telangana',
    description: ''
  },
];

// Slider component
const SliderComponent = () => {
  return (
    <div>
    <h1>Our Reliable Partners</h1>
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

export default SliderComponent;