import React, { useState } from "react";

const ResponsivePhoneNumber = ({ phoneNumber }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick}>
      {isClicked ? (
        <span>{phoneNumber}</span>
      ) : (
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      )}
    </div>
  );
};

export default ResponsivePhoneNumber;
