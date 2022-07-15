import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillApple, AiFillPlayCircle } from "react-icons/ai";

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
  slidesToScroll: 1,
  // bre
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

      <div className="h-[132px] bg-back-color max-w-[1366px] mx-auto ">
        {/* <div className="border-2 border-red-700 flex justify-between">
          <a className="text-white">Featured Matches</a>
          <a className="text-white">Featured Matches</a>
        </div> */}

        <div className=" relative  border-2 border-blue-600-700 w-[340px] mx-[173px] rounded-[10px]">
          <img
            src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9Qb25kaWNoZXJyeV9UMjBNYXRjaC1DYXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
            className="w-[340px] h-[100px]"
          ></img>
          <div className="flex flex-col gap-[4px] pt-[22px] pb-2">
            <div className="flex items-center justify-between mx-[2px]">
              <div className="flex gap-[10px]">
                <div className="flex flex-col">
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
                  <span>127/7</span>
                  <span>20 overs</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <span>Tuskers XI beat Lions XI by 2 runs</span>
            </div>
          </div>

          <div className="absolute top-[81px] left-[100px] bg-orange-600 rounded-[20px]">
            <div className="p-2 flex justify-center items-center  gap-2 ">
              <AiFillPlayCircle className=" pt-2px" />
              <span className="text-white">WATCH LIVE</span>
            </div>
          </div>
        </div>

        <div className="mx-[173px]">
          <Slider {...settings}>
            <div>
              <div className=" relative  border-2 border-blue-600-700 w-[340px]  rounded-[10px]">
                <img
                  src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9Qb25kaWNoZXJyeV9UMjBNYXRjaC1DYXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                  className="w-[340px] h-[100px]"
                ></img>
                <div className="flex flex-col gap-[4px] pt-[22px] pb-2">
                  <div className="flex items-center justify-between mx-[2px]">
                    <div className="flex gap-[10px]">
                      <div className="flex flex-col">
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
                        <span>127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span>Tuskers XI beat Lions XI by 2 runs</span>
                  </div>
                </div>

                <div className="absolute top-[81px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="p-2 flex justify-center items-center  gap-2 ">
                    <AiFillPlayCircle className=" pt-2px" />
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div>
              <div className=" relative  border-2 border-blue-600-700 w-[340px]  rounded-[10px]">
                <img
                  src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9Qb25kaWNoZXJyeV9UMjBNYXRjaC1DYXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                  className="w-[340px] h-[100px]"
                ></img>
                <div className="flex flex-col gap-[4px] pt-[22px] pb-2">
                  <div className="flex items-center justify-between mx-[2px]">
                    <div className="flex gap-[10px]">
                      <div className="flex flex-col">
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
                        <span>127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span>Tuskers XI beat Lions XI by 2 runs</span>
                  </div>
                </div>

                <div className="absolute top-[81px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="p-2 flex justify-center items-center  gap-2 ">
                    <AiFillPlayCircle className=" pt-2px" />
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" relative  border-2 border-blue-600-700 w-[340px]  rounded-[10px]">
                <img
                  src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9Qb25kaWNoZXJyeV9UMjBNYXRjaC1DYXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                  className="w-[340px] h-[100px]"
                ></img>
                <div className="flex flex-col gap-[4px] pt-[22px] pb-2">
                  <div className="flex items-center justify-between mx-[2px]">
                    <div className="flex gap-[10px]">
                      <div className="flex flex-col">
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
                        <span>127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span>Tuskers XI beat Lions XI by 2 runs</span>
                  </div>
                </div>

                <div className="absolute top-[81px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="p-2 flex justify-center items-center  gap-2 ">
                    <AiFillPlayCircle className=" pt-2px" />
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className=" relative  border-2 border-blue-600-700 w-[340px]  rounded-[10px]">
                <img
                  src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9Qb25kaWNoZXJyeV9UMjBNYXRjaC1DYXJkLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTAwLCJ3aWR0aCI6MzI4LCJwb3NpdGlvbiI6InRvcCJ9fX0="
                  className="w-[340px] h-[100px]"
                ></img>
                <div className="flex flex-col gap-[4px] pt-[22px] pb-2">
                  <div className="flex items-center justify-between mx-[2px]">
                    <div className="flex gap-[10px]">
                      <div className="flex flex-col">
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
                        <span>127/7</span>
                        <span>20 overs</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <span>Tuskers XI beat Lions XI by 2 runs</span>
                  </div>
                </div>

                <div className="absolute top-[81px] left-[100px] bg-orange-600 rounded-[20px]">
                  <div className="p-2 flex justify-center items-center  gap-2 ">
                    <AiFillPlayCircle className=" pt-2px" />
                    <span className="text-white">WATCH LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        {/*  */}
      </div>

      <div className="bg-back-color  mt-[120px] mx-auto  max-w-[1366px]">
        <div className="py-[32px] flex justify-center ">
          <img
            src="https://www.fancode.com/867f5c067d544a3f79567a893209f1c4.svg"
            className="w-[144px]"
          ></img>
        </div>

        <div className="flex flex-col justify-center items-center gap-[23px] border-2 border-contact-color ">
          <div className="pt-[24px]">
            <span className="text-white">Connect With Us</span>
          </div>
          <div className="flex justify-center items-center gap-[24px] pb-[24px]">
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
          </div>{" "}
        </div>
        <div className="flex flex-col justify-center items-center gap-[23px] border-1">
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
