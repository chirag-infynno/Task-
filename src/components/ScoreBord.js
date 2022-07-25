import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { token, url } from "../utils";
import { useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { cleanData } from "../store/cricketmatchslice";

import { AiFillApple, AiFillPlayCircle } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";

import { IoLogoGooglePlaystore, IoNotificationsOutline } from "react-icons/io5";
import axios from "axios";
import { ScoreCard } from "./ScoreCard";
import { fetchMatchApi } from "../store/cricketmatchslice";
import { useDispatch, useSelector } from "react-redux";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
];

export function ScoreBord() {
  const [botomcolor, setBottomcolor] = useState("Scorecard");
  const [bothopen, setBothopen] = useState(false);

  const { id } = useParams();

  // const ref = useRef();

  const dispatch = useDispatch();
  const {
    apidata,
    status,
    localteamid,
    visitorteamid,
    visitorteamdata,
    localteamdata,
    didnotplayvisitorteam,
    didnotplaylocalteam,
  } = useSelector((state) => state.cricketMatchApi);

  // console.log(status);

  useEffect(() => {
    dispatch(fetchMatchApi(id));

    return () => {
      // cancel the subscription
      dispatch(cleanData());
      // isApiSubscribed = false;
    };
  }, []);
  return (
    <>
      {apidata ? (
        <div className="relative   max-w-[1366px]  mt-10 mx-auto   ">
          <div className=" mx-[340px] max-w-[1366px]">
            {/* scorbord header */}
            <div className="flex justify-between px-[23px] py-[20px]">
              {/* a<div className="mx-[]">a</div> */}
              <div className="flex flex-col">
                <div>
                  <span className="bg-[#2C41B6] text-white p-[1px]">
                    {apidata && apidata.localteam?.code}
                    {/* AM */}
                  </span>
                </div>
                <div className="flex gap-[5px]  justify-center items-center">
                  <span className="text-[21px]">
                    {apidata &&
                    apidata?.localteam.id === apidata?.runs[0].team_id
                      ? `${apidata?.runs[0].score} / ${apidata?.runs[0].wickets}`
                      : `${apidata?.runs[1].score} / ${apidata?.runs[1].wickets}`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[1px] border-[2px] border-[#e6e6e6] h-[15px]"></div>
                <div className="rounded-full bg-[#e6e6e6] w-[24px] h-[24px] flex justify-center items-center">
                  <span className="flex justify-center items-center">v</span>
                </div>{" "}
                <div className="w-[1px] border-[2px] border-[#e6e6e6] h-[15px]"></div>
              </div>
              <div className="flex flex-col items-end">
                <div className="">
                  <span className="bg-[#F89437] text-white p-[1px] ">
                    {apidata && apidata.visitorteam?.code}
                  </span>
                </div>
                <div className="flex gap-[5px]  justify-center items-center">
                  <span className="text-[21px]">
                    {apidata &&
                    apidata.visitorteam?.id === apidata?.runs[0].team_id
                      ? `${apidata?.runs[0].score} / ${apidata?.runs[0].wickets}`
                      : `${apidata?.runs[1].score} / ${apidata?.runs[1].wickets}`}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-[rgb(0, 18, 64)]">
              {apidata && apidata?.note}
            </div>
            <div>
              <div className="flex justify-between items-center border-y">
                <div
                  className={`flex justify-center items-center   w-[134px]  py-[14px]  border-b-[5px]   cursor-pointer ${
                    botomcolor == "Fantasy"
                      ? " border-b-[#F89437] "
                      : "border-b-white"
                  }`}
                  onClick={() => setBottomcolor("Fantasy")}
                >
                  Fantasy
                </div>
                <div
                  className={`flex justify-center items-center   w-[134px]  py-[14px]  border-b-[5px]  cursor-pointer ${
                    botomcolor == "Info"
                      ? " border-b-[#F89437] "
                      : "border-b-white"
                  }`}
                  onClick={() => setBottomcolor("Info")}
                >
                  Info
                </div>
                <div
                  className={`flex justify-center items-center  border-b-[5px]   w-[134px]  py-[14px] cursor-pointer ${
                    botomcolor == "Live"
                      ? " border-b-[#F89437]"
                      : " border-b-white "
                  }`}
                  onClick={() => setBottomcolor("Live")}
                >
                  Live
                </div>
                <div
                  className={`flex justify-center items-center   w-[134px]  py-[14px]  border-b-[5px]  cursor-pointer ${
                    botomcolor == "Scorecard"
                      ? " border-b-[#F89437] "
                      : "border-b-white"
                  }`}
                  onClick={() => {
                    setBottomcolor("Scorecard");
                  }}
                >
                  Scorecard
                </div>
                <div
                  className={`flex justify-center items-center    border-b-[5px] w-[134px]  py-[14px] cursor-pointer ${
                    botomcolor == "Squad"
                      ? " border-b-[#F89437] "
                      : "border-b-white"
                  }`}
                  onClick={() => setBottomcolor("Squad")}
                >
                  Squad
                </div>
              </div>
            </div>
            {/* <ScoreBord /> */}
            <ScoreCard
              {...{
                apidata: localteamdata,
                alldata: apidata,
                hometeam: localteamid,

                didnotplaylocal: didnotplaylocalteam,
                bothopen: bothopen,
                setBothopen: setBothopen,
                slider1: true,
              }}
            />
            <ScoreCard
              {...{
                apidata: visitorteamdata,
                alldata: apidata,
                hometeam: visitorteamid,
                didnotplaylocal: didnotplayvisitorteam,
                bothopen: bothopen,
                setBothopen: setBothopen,
                slider2: true,
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="mt-[50px] h-[400px] w-[100%] flex justify-center items-center">
            <TailSpin color="orange" height={100} width={40} />
          </div>
        </>
      )}
    </>
  );
}
