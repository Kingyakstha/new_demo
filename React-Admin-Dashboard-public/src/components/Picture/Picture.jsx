import React from 'react';
import img1 from "../../imgs/pic21.png"
import "./Picture.css"; 

const Pictures = () => {
  return (
    <div className="image-container">
      <img src={img1} alt="Your Image" />
    </div>
  );
}

export default Pictures;

