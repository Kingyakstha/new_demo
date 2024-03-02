import React from "react";
import Pictures from "../Picture/Picture";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        
        <Pictures />
      </div>
    </div>
  );
};

export default RightSide;
