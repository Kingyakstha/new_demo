import React, { useEffect, useState } from "react";
import "./Card.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faDoorClosed,faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import Switch from "../Switch/Switch";
import axios from 'axios';


// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;



  const [dataa,setdata]=useState("")
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://192.168.11.102:4000/api");
        const data = await response.json();
        setdata(data)
      } catch (err) {
        if (!err.response) {
          console.log("No server response",err);
        } else {
          console.log("Failed");
        }
      }
    };
  
    const intervalId = setInterval(getData,500);

  // Cleanup function to clear the interval
  return () => clearInterval(intervalId);
  });



  const [isRotating, setIsRotating] = useState(false); 
  useEffect(() => {
     // Start or stop rotation based on dataa.Fan value
     setIsRotating(dataa.Fan);
   }, [dataa.Fan]);


 

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="radialBar">
      <FontAwesomeIcon 
  icon={param.title === "Door" && !dataa.Door ? faDoorClosed: param.icon1}
  className={`svg-inline--fa ${param.title === "Fan" && isRotating ? "rotate" : ""} ${param.title === "Light_bulb" && dataa.Light_bulb ? "light-bulb-on" : "light-bulb-off"} ${param.title === "Light_bulb" && !dataa.Light_bulb ? "door-thing" : ""} ${param.title === "Fan"? "door-thing" : ""} ${param.title === "Door"? "door-thing" : ""}`}
  style={{
    fontSize: '75px', 
  }}
/>


      <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>
  {param.title === "Fan" ? (dataa.Fan ? "On" : "Off") : ""}
  {param.title === "Door" ? (dataa.Door ? "On" : "Off") : ""}
  {param.title === "Light_bulb" ? (dataa.Light_bulb ? "On" : "Off") : ""}
</span>

<span></span>
      </div>
    </motion.div>

    
  );
}






// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last week</span>
    </motion.div>
  );
}

export default Card;