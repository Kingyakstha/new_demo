import React from "react";
import ExampleComponent from "../CustomerReview/CustomerReview";
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
        
        <ExampleComponent />
      </div>
    </div>
  );
};

export default RightSide;
