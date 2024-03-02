import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faDoorClosed,faDoorOpen,faLightbulb,faFan} from '@fortawesome/free-solid-svg-icons'
// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,

  UilLock,

  UilBrightnessLow,

  UilWind,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsdata= {
  title: "Light_bulb",
  icon1:faLightbulb,
  color: {
    backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
    boxShadow: "0px 10px 20px 0px #FDC0C7",
  },
  barValue: 80,
  value: "14,270",
  png: UilMoneyWithdrawal,
  series: [
    {
      name: "Light_bulb",
      data: [10, 100, 50, 70, 80, 30, 40],
    },
  ],
};



export const cardsData = [
  
  {
    title: "Light_bulb",
    icon1:faLightbulb,
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilBrightnessLow,
    series: [
      {
        name: "Light_bulb",
        data: [2, 10, 5, 7, 12, 4, 0],
      },
    ],
  },
  
  {
    title: "Fan",
    icon1:faFan,
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilWind,
    series: [
      {
        name: 'Fan',
        data: [5, 7, 2, 8, 7, 10, 0],
      },
    ],
  },
  {
    title: "Door",
    icon1:faDoorOpen,
    icon2:faDoorClosed,
   
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilLock,
    series: [
      {
        name: 'Door',
        data: [2, 1, 3, 2.2, 2, 1, 0]
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "User",
    noti: "has opened the door",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "User",
    noti: "has closed the fan",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "User",
    noti: "has opened the fan",
    time: "2 hours ago",
  },
];



