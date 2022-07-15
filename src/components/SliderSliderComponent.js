import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillApple, AiFillPlayCircle } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";

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
export function SliderComponent() {
  const ref = useRef();
  function nextSlide() {
    console.log(ref);
    ref.current.slickNext();
  }
  function prevSlide() {
    // console.log(ref);
    ref.current.slickPrev();
  }
  return (
    <>
      <div className="relative h-[167px] bg-back-color max-w-[1366px] mx-auto  mt-10 ">
        <div className=" flex justify-between  mx-[171px] py-[20px]">
          <a className="text-white">Featured Matches</a>
          <a className="text-white">Featured Matches</a>
        </div>

        <div className="relative mx-[180px] ">
          <Slider ref={ref} {...settings}>
            <div className="">
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span>127/7</span>
                        <span>20 overs</span>
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span className="">127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="text-[12px]">
                      Tuskers XI beat Lions XI by 2 runs
                    </span>
                  </div>
                </div>
                <div className="absolute top-[84px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="px-[9px] py-[4px] flex justify-center items-center  gap-2 ">
                    <div className="flex justify-center items-center">
                      <AiFillPlayCircle className="text-white " />
                    </div>
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
                {/* padding-top: 20px; padding-bottom: 10px; z-index: -87;
                margin-top: -10px; position: relative; */}
                <div className=" invisible -mt-[12px] pt-3 pb-2  relative w-[315px]   bg-more-cricket-color rounded-b-[20px] flex justify-between z-[-10] group-hover:visible">
                  <div className="flex px-[10px] items-center justify-between w-[98%] ">
                    <div className="flex items-center">
                      <MdBarChart
                        // className="decoration-header-color"
                        style={{
                          color: "#EA580C",
                        }}
                      />
                      <span className="pl-[2px] text-[14px]">Points Table</span>
                    </div>{" "}
                    <div className="flex items-center justify-center flex-row-reverse">
                      <div
                        className="flex justify-center items-center rounded-full bg-header-color
                     "
                      >
                        <FaGreaterThan
                          className="h-[8px] w-[8px]"
                          style={{
                            color: "white",
                          }}
                        />
                      </div>

                      <span className="pr-[2px] text-[14px]">More Cricket</span>
                    </div>
                  </div>
                </div>
                {/* a */}
              </div>
            </div>
            <div className="">
              <div className=" group relative  w-[315px] ">
                <img
                  src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9FQ1MtQnJlc2NpYV9NYXRjaC1DYXJkXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                  className="w-[325px] h-[103px]"
                ></img>
                <div className="bg-white lex flex-col gap-[4px] pt-[22px] pb-2  border-[1px] rounded-b-[12px] z-[5] ">
                  <div className="flex items-center justify-between mx-[2px]">
                    <div className="flex gap-[10px]">
                      <div className="flex flex-col justify-center items-center">
                        <img
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span>127/7</span>
                        <span>20 overs</span>
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span className="">127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="text-[12px]">
                      Tuskers XI beat Lions XI by 2 runs
                    </span>
                  </div>
                </div>
                <div className="absolute top-[84px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="px-[9px] py-[4px] flex justify-center items-center  gap-2 ">
                    <div className="flex justify-center items-center">
                      <AiFillPlayCircle className="text-white " />
                    </div>
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
                {/* padding-top: 20px; padding-bottom: 10px; z-index: -87;
                margin-top: -10px; position: relative; */}
                <div className=" invisible -mt-[12px] pt-3 pb-2  relative w-[315px]   bg-more-cricket-color rounded-b-[20px] flex justify-between z-[-10] group-hover:visible">
                  <div className="flex px-[10px] items-center justify-between w-[98%] ">
                    <div className="flex items-center">
                      <MdBarChart
                        // className="decoration-header-color"
                        style={{
                          color: "#EA580C",
                        }}
                      />
                      <span className="pl-[2px] text-[14px]">Points Table</span>
                    </div>{" "}
                    <div className="flex items-center justify-center flex-row-reverse">
                      <div
                        className="flex justify-center items-center rounded-full bg-header-color
                     "
                      >
                        <FaGreaterThan
                          className="h-[8px] w-[8px]"
                          style={{
                            color: "white",
                          }}
                        />
                      </div>

                      <span className="pr-[2px] text-[14px]">More Cricket</span>
                    </div>
                  </div>
                </div>
                {/* a */}
              </div>
            </div>
            <div className="">
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span>127/7</span>
                        <span>20 overs</span>
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span className="">127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="text-[12px]">
                      Tuskers XI beat Lions XI by 2 runs
                    </span>
                  </div>
                </div>
                <div className="absolute top-[84px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="px-[9px] py-[4px] flex justify-center items-center  gap-2 ">
                    <div className="flex justify-center items-center">
                      <AiFillPlayCircle className="text-white " />
                    </div>
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
                {/* padding-top: 20px; padding-bottom: 10px; z-index: -87;
                margin-top: -10px; position: relative; */}
                <div className=" invisible -mt-[12px] pt-3 pb-2  relative w-[315px]   bg-more-cricket-color rounded-b-[20px] flex justify-between z-[-10] group-hover:visible">
                  <div className="flex px-[10px] items-center justify-between w-[98%] ">
                    <div className="flex items-center">
                      <MdBarChart
                        // className="decoration-header-color"
                        style={{
                          color: "#EA580C",
                        }}
                      />
                      <span className="pl-[2px] text-[14px]">Points Table</span>
                    </div>{" "}
                    <div className="flex items-center justify-center flex-row-reverse">
                      <div
                        className="flex justify-center items-center rounded-full bg-header-color
                     "
                      >
                        <FaGreaterThan
                          className="h-[8px] w-[8px]"
                          style={{
                            color: "white",
                          }}
                        />
                      </div>

                      <span className="pr-[2px] text-[14px]">More Cricket</span>
                    </div>
                  </div>
                </div>
                {/* a */}
              </div>
            </div>
            <div className="">
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span>127/7</span>
                        <span>20 overs</span>
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
                          src="https://d13ir53smqqeyp.cloudfront.net/flags/cr-flags/TUS-CR2@2x.png"
                          className="w-[32px]"
                        ></img>
                        <span>TUS</span>
                      </div>
                      <div className=" flex flex-col">
                        <span className="">127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span className="text-[12px]">
                      Tuskers XI beat Lions XI by 2 runs
                    </span>
                  </div>
                </div>
                <div className="absolute top-[84px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="px-[9px] py-[4px] flex justify-center items-center  gap-2 ">
                    <div className="flex justify-center items-center">
                      <AiFillPlayCircle className="text-white " />
                    </div>
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
                {/* padding-top: 20px; padding-bottom: 10px; z-index: -87;
                margin-top: -10px; position: relative; */}
                <div className=" invisible -mt-[12px] pt-3 pb-2  relative w-[315px]   bg-more-cricket-color rounded-b-[20px] flex justify-between z-[-10] group-hover:visible">
                  <div className="flex px-[10px] items-center justify-between w-[98%] ">
                    <div className="flex items-center">
                      <MdBarChart
                        // className="decoration-header-color"
                        style={{
                          color: "#EA580C",
                        }}
                      />
                      <span className="pl-[2px] text-[14px]">Points Table</span>
                    </div>{" "}
                    <div className="flex items-center justify-center flex-row-reverse">
                      <div
                        className="flex justify-center items-center rounded-full bg-header-color
                     "
                      >
                        <FaGreaterThan
                          className="h-[8px] w-[8px]"
                          style={{
                            color: "white",
                          }}
                        />
                      </div>

                      <span className="pr-[2px] text-[14px]">More Cricket</span>
                    </div>
                  </div>
                </div>
                {/* a */}
              </div>
            </div>
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

        {/*  */}
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
