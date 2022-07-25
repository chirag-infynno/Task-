import React, { useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Oval } from "react-loader-spinner";

import { AiFillApple, AiFillPlayCircle } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import { data, fetchapi } from "../store/cricketapislice";

import { token, url } from "../utils";
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
  slidesToScroll: 2,
  arrows: false,
};

export function SliderComponent() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const apidata = useSelector(data);
  const ref = useRef();
  function nextSlide() {
    ref.current.slickNext();
  }
  function prevSlide() {
    ref.current.slickPrev();
  }

  useEffect(() => {
    console.log("apidata", apidata);
    apidata.status == "idle" && dispatch(fetchapi());
  }, [apidata]);
  return (
    <>
      <div className="relative h-[167px] bg-back-color max-w-[1366px] mx-auto  mt-10 ">
        <div className=" flex justify-between  mx-[171px] py-[20px]">
          <a className="text-white">Featured Matches</a>
          <a className="text-white">Featured Matches</a>
        </div>
        <div className="relative mx-[180px] ">
          <Slider ref={ref} {...settings}>
            {apidata && apidata?.data.length > 0 ? (
              apidata?.data.map((data, index) => {
                return (
                  <div className=" " key={index}>
                    <div className=" group relative  w-[315px] ">
                      <img
                        src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9Qb25kaWNoZXJyeV9UMjBNYXRjaC1DYXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                        className="w-[325px] h-[103px]"
                      ></img>
                      <div className="bg-white lex flex-col gap-[4px] pt-[22px] pb-2  border-[1px] rounded-b-[12px] z-[5] ">
                        <div className="flex items-center justify-between mx-[2px]">
                          <div className="flex gap-[10px]">
                            <div className="flex flex-col justify-center items-center">
                              <img
                                src={data.localteam.image_path}
                                className="w-[30px] h-[30px]"
                              ></img>
                              <span>{data.localteam.code}</span>
                            </div>
                            <div className=" flex flex-col">
                              <span>
                                {data.draw_noresult
                                  ? "N/A"
                                  : data.runs[0]?.team_id === data.localteam.id
                                  ? `${data.runs[0]?.score}/${data.runs[0]?.wickets}`
                                  : `${data.runs[1]?.score}/${data.runs[1]?.wickets}`}
                              </span>
                              <span>{data.runs[1]?.overs} overs</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-[0px] border-[2px] border-[#e6e6e6] h-[10px]"></div>
                            <div className="rounded-full bg-[#e6e6e6] w-4 h-4 flex justify-center items-center">
                              vs
                            </div>
                            <div className="w-[0px] border-[2px] border-[#e6e6e6] h-[10px]"></div>
                          </div>
                          <div className="flex gap-[10px] flex-row-reverse">
                            <div className="flex flex-col">
                              <img
                                src={data.visitorteam.image_path}
                                className="w-[30px] h-[30px]"
                              ></img>
                              <span>{data.visitorteam.code}</span>
                            </div>
                            <div className=" flex flex-col">
                              <span>
                                {data.draw_noresult
                                  ? "N/A"
                                  : !data.runs[0]?.team_id === data.localteam.id
                                  ? `${data.runs[0]?.score}/${data.runs[0]?.wickets}`
                                  : `${data.runs[1]?.score}/${data.runs[1]?.wickets}`}
                              </span>
                              <span>{data.runs[0]?.overs} overs</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center items-center">
                          <span className="text-[12px]">{data.note}</span>
                        </div>
                      </div>
                      <div
                        className={`absolute top-[84px] left-[100px] ${
                          data.live
                            ? " bg-orange-600 rounded-[20px]"
                            : "bg-white rounded-[20px]"
                        } `}
                      >
                        <div className="px-[9px] py-[4px] flex justify-center items-center  gap-2 ">
                          <div className="flex justify-center items-center">
                            <AiFillPlayCircle
                              className={`${
                                !data.live
                                  ? "text-orange-600  rounded-[20px]"
                                  : "text-white rounded-[20px]"
                              } `}
                            />
                          </div>
                          <span
                            onClick={() => navigate(`/${data.id}`)}
                            className={
                              !data.live
                                ? "text-orange-600 cursor-pointer"
                                : "text-white cursor-pointer"
                            }
                          >
                            {data.live ? "WATCH LIVE" : "PREVIEW"}
                          </span>
                        </div>
                      </div>

                      <div className=" invisible -mt-[12px] pt-3 pb-2  relative w-[315px]   bg-more-cricket-color rounded-b-[20px] flex justify-between z-[-10] group-hover:visible">
                        <div className="flex px-[10px] items-center justify-between w-[98%] ">
                          <div className="flex items-center">
                            {/* <MdBarChart
                              style={{
                                color: "#EA580C",
                              }}
                            /> */}
                            <span className="pl-[2px] text-[14px]">
                              Points Table
                            </span>
                          </div>{" "}
                          <div className="flex items-center justify-center flex-row-reverse">
                            <span className="pr-[2px] text-[14px]">
                              More Cricket
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className=" h-[400px] w-[100%] flex justify-center items-center bg-dark">
                  <Oval color="orange" height={100} width={40} />
                </div>
              </>
            )}
          </Slider>
        </div>

        <button
          onClick={() => prevSlide()}
          className="bg-white  absolute h-[50px] top-[144px] left-[148px] w-[50px]  flex justify-center items-center rounded-[50%]"
        >
          <BiLeftArrowAlt size={"30px"} />
        </button>
        <button
          onClick={() => nextSlide()}
          className=" bg-white absolute h-[50px] top-[144px]  right-[164px] w-[50px]  flex justify-center items-center rounded-[50%]"
        >
          <BiRightArrowAlt size={"30px"} />
        </button>
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}
