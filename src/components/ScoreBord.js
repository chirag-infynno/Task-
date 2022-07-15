import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { token, url } from "../utils";
import { useParams } from "react-router-dom";

import { AiFillApple, AiFillPlayCircle } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";

import { IoLogoGooglePlaystore, IoNotificationsOutline } from "react-icons/io5";
import axios from "axios";
import { ScoreCard } from "./ScoreCard";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

export function ScoreBord() {
  const [apidata, setApidata] = useState([]);
  const { id } = useParams();
  // console.log("id", id);
  const ref = useRef();
  function nextSlide() {
    console.log(ref);
    ref.current.slickNext();
  }
  function prevSlide() {
    // console.log(ref);
    ref.current.slickPrev();
  }

  async function fetchapidata() {
    const { data, status } = await axios.get(
      `${url}fixtures/${id}?api_token=${token}&include=bowling,batting,balls,runs`
    );
    if (status == 200) {
      console.log("data", data);
    }
  }

  useEffect(() => {
    // fetchapidata();
  }, []);
  return (
    <>
      <div className="relative h-[167px]  max-w-[1366px]  mt-10 mx-auto   ">
        <div className=" mx-[340px] max-w-[1366px]">
          {/* scorbord header */}
          <div className="flex justify-between px-[23px] py-[20px]">
            {/* a<div className="mx-[]">a</div> */}
            <div className="flex flex-col">
              <div>
                <span className="bg-[#2C41B6] text-white p-[1px]">
                  {/* {data.localteam.code} */}
                  AM
                </span>
              </div>
              <div className="flex gap-[5px]  justify-center items-center">
                <span className="text-[21px]">18/1</span>
                <span className="text-[12px]">(5)</span>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-[1px] border-[2px] border-[#e6e6e6] h-[15px]"></div>
              <div className="rounded-full bg-[#e6e6e6] w-4 h-4 flex justify-center items-center">
                vs
              </div>{" "}
              <div className="w-[1px] border-[2px] border-[#e6e6e6] h-[15px]"></div>
            </div>
            <div className="flex flex-col items-end">
              <div className="">
                <span className="bg-[#F89437] text-white p-[1px] ">AM</span>
              </div>
              <div className="flex gap-[5px]  justify-center items-center">
                <span className="text-[21px]">18/1</span>
                <span className="text-[12px]">(5)</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-red-700 pb-[15px]">
            asc
          </div>
          <div>
            <div className="flex justify-between items-center border-y">
              <div className="flex justify-center items-center w-[134px] py-[14px]">
                Fantasy
              </div>
              <div className="flex justify-center items-center  w-[134px] py-[14px]">
                Info
              </div>
              <div className="flex justify-center items-center  w-[134px] py-[14px]">
                Live
              </div>
              <div className="flex justify-center items-center  w-[134px] py-[14px]">
                Scorecard
              </div>
              <div className="flex justify-center items-center  w-[134px] py-[14px]">
                Squad
              </div>
            </div>
          </div>
          {/* <ScoreBord /> */}
          <ScoreCard />
          <ScoreCard />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
