import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillApple, AiFillPlayCircle } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { IoLogoGooglePlaystore, IoNotificationsOutline } from "react-icons/io5";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Nav() {
  return (
    <>
      <div className="  fixed top-0 left-0 right-0 bg-back-color  mx-auto max-w-[1366px] ">
        <div className="px-[163px] flex justify-between">
          <div className="flex gap-[50px]  m">
            <img
              src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
              className="w-[144px]"
            ></img>

            <div className="flex items-center gap-[24px]">
              <span className="text-[14px] text-header-color">HOME</span>
              <span className="text-white text-[14px]">SCHEDULE</span>
              <span className="text-white text-[14px]">
                SHOP <sup className="bg-header-color w-[135px]">NEW</sup>{" "}
              </span>
            </div>
          </div>

          <div className="flex gap-x-3 justify-center  items-center ">
            <div className="flex  justify-center  items-center rounded-full  ">
              <img
                src="https://fancode.com/skillup-uploads/fc-web/icon-play-store.png "
                style={{
                  width: "25px",
                }}
              ></img>

              {/* <img src="https://fancode.com/skillup-uploads/fc-web/icon-play-store.png"  ></img> */}
            </div>
            <div className="flex  justify-center  items-center rounded-full  bg-white">
              {/* <IoLogoGooglePlaystore /> */}

              <img
                src="https://fancode.com/skillup-uploads/fc-web/icon-app-store.png"
                style={{
                  width: "25px",
                }}
              ></img>
            </div>
            <div className="flex  justify-center  items-center ">
              <span className="text-white">Get The App</span>
            </div>
            <div className="flex  justify-center  items-center  ">
              <IoNotificationsOutline size="25px" className="text-white" />
            </div>{" "}
            <div className="flex  justify-center  items-center rounded-full  ">
              {/* <FaUserCircle /> */}

              <img
                src="https://www.fancode.com/4e3d7cbf4a8cd768e30b93b7540340a2.png"
                style={{
                  width: "25px",
                }}
              ></img>
            </div>
            <div className="flex  justify-center  items-center ">
              <span className="text-white">Login/Register</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default nav;
