import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { DiApple } from "react-icons/di";
import { FaUserCircle } from "react-icons/fa";
import Slider from "react-slick";

import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore, IoNotificationsOutline } from "react-icons/io5";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Nav() {
  return (
    <>
      <div className="bg-back-color  mx-auto max-w-[1366px]">
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

          <div className="flex gap-x-3 justify-center  items-center border-red-400 ">
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

      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>

      <div className="bg-back-color  mt-[120px] mx-auto  max-w-[1366px]">
        <div className="py-[32px] flex justify-center ">
          <img
            src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
            className="w-[144px]"
          ></img>
        </div>
        <div className="flex flex-col justify-center items-center gap-[23px] border-1">
          <div className="">
            <span className="text-white">Connect With Us</span>
          </div>
          <div className="flex justify-center items-center gap-[24px]">
            <img
              src="https://fancode.com/skillup-uploads/icons/twitter_icon.svg"
              style={{
                width: "48px",
              }}
            />
            <img
              src="https://fancode.com/skillup-uploads/icons/insta_icon.svg"
              style={{
                width: "48px",
              }}
            />
            <img
              src="https://fancode.com/skillup-uploads/icons/fb_icon.svg"
              style={{
                width: "48px",
              }}
            />
          </div>

          <div className="px-[32px] w-[100%] flex justify-center items-center gap-[24px]">
            <div className="text-center">
              <p className="text-white ">
                Corporate Office: ONE BKC, Tower A, 12th &amp; 14th Floor, Unit
                1201 &amp; 1202 and 1401 &amp; 1402, Plot C-66, G Block, Bandra
                Kurla Complex, Bandra (East), Mumbai, Maharashtra-400051
              </p>
            </div>
            <div>
              <p className="text-center">
                <a className="text-white">Careers</a>
                <span className="text-white"> | </span>
                <a className="text-white">Help Desk</a>
                <span className="text-white"> | </span>
                <a className="text-white">T&Cs </a>
                <span className="text-white"> | </span>
                <a className="text-white">Privacy Policy </a>
                <span className="text-white"> </span>
                <a className="text-white"> | About Us </a>
                <span className="text-white"> | </span>
                <a className="text-white">IND vs WI </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default nav;
