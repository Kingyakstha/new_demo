import React, { useEffect } from "react";
import Cards from "../Cards/Cards";
import ApexCharts from 'apexcharts';
import "./MainDash.css";

const MainDash = () => {
  useEffect(() => {
    var options = {
    

      series: [{
        name: "Light_bulb",
        data: [2, 10, 5, 7, 12, 4, 0],
      }, 
      {
        name: 'Fan',
        data: [5, 7, 2, 8, 7, 10, 0]
      }, {
        name: 'Door',
        data: [2, 1, 3, 2.2, 2, 1, 0]
      },
      {
        name: "Led",
        data: [3, 8, 1, 4, 10, 2, 0],
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        },
     
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10, 
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          },
        },
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      colors: ['#FF919D',
      '#F8D49A',
      '#BB67FF',
      '#82D3FF']
    };
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy(); // Destroy the chart when the component unmounts
    };
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <div id="chart"></div> 
    </div>
  );
};

export default MainDash;

 