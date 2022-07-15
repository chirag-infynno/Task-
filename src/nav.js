import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { DiApple } from "react-icons/di";
import { FaUserCircle } from "react-icons/fa";
// import {  } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore, IoNotificationsOutline } from "react-icons/io5";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Nav() {
  return (
    <>
      {/* <div className="flex  justify-center border-red bg-blue-500 "> */}
      {/* <div className="flex  justify-center border-2 border-red bg-blue-500"> */}
      <div className=" bg-red-500 flex justify-center">
        <div className="flex justify-between bg-back-color w-[1440px]">
          {/* <div> */}
          <div>
            <div className="flex gap-[50px]  m">
              <img
                src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
                className="w-[144px]"
              ></img>

              <div className="flex items-center gap-[24px]">
                <span className="text-[14px] text-header-text-color">HOME</span>
                <span className="text-white text-[14px]">SCHEDULE</span>
                <span className="text-white text-[14px]">SHOP </span>
              </div>
            </div>
            {/* </div> */}
            <div className="flex gap-x-3 justify-center  items-center border-red-400 ">
              <div className="flex  justify-center  items-center rounded-full  bg-white">
                <AiFillApple />
              </div>
              <div className="flex  justify-center  items-center rounded-full  bg-white">
                <IoLogoGooglePlaystore />
              </div>
              <div className="flex  justify-center  items-center ">
                <span className="text-white">Get The App</span>
              </div>
              <div className="flex  justify-center  items-center  ">
                <IoNotificationsOutline className="text-white" />
              </div>{" "}
              <div className="flex  justify-center  items-center rounded-full  bg-white">
                <FaUserCircle />
              </div>
              <div className="flex  justify-center  items-center ">
                <span className="text-white">Login/Register</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}

      <div className="bg-red-500 max-w-[1440px] mx-auto">
        <div className="px-[163px] bg-blue-500 flex justify-between">
          <div className="flex gap-[50px]  m">
            <img
              src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
              className="w-[144px]"
            ></img>

            <div className="flex items-center gap-[24px]">
              <span className="text-[14px] text-header-text-color">HOME</span>
              <span className="text-white text-[14px]">SCHEDULE</span>
              <span className="text-white text-[14px]">SHOP </span>
            </div>
          </div>

          <div className="flex gap-x-3 justify-center  items-center border-red-400 ">
            <div className="flex  justify-center  items-center rounded-full  bg-white">
              <AiFillApple />
            </div>
            <div className="flex  justify-center  items-center rounded-full  bg-white">
              <IoLogoGooglePlaystore />
            </div>
            <div className="flex  justify-center  items-center ">
              <span className="text-white">Get The App</span>
            </div>
            <div className="flex  justify-center  items-center  ">
              <IoNotificationsOutline className="text-white" />
            </div>{" "}
            <div className="flex  justify-center  items-center rounded-full  bg-white">
              <FaUserCircle />
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
