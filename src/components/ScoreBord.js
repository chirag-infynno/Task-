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
  const [homebattig, setHomebating] = useState(null);
  const [hometeam, sethometeam] = useState([]);
  const [hometeamdata, sethometeamdata] = useState([]);
  const [visiterteam, setvisiterteam] = useState([]);
  const [apidata, setApidata] = useState(null);
  const { id } = useParams();

  const ref = useRef();

  async function fetchapidata() {
    const { data, status } = await axios.get(
      `${url}fixtures/${id}?api_token=${token}&include=bowling,batting,runs,lineup,localteam,visitorteam,batting.batsman,bowling.bowler,batting.bowler,balls,batting.catchstump,balls.team,scoreboards`
    );
    if (status == 200) {
      console.log(data.data);
      setApidata(data.data);

      const localteam_id = data.data.localteam_id;

      const visitorteam_id = data.data.visitorteam_id;
      const localteam_bestmen = data.data.batting.filter((bestmen) => {
        if (bestmen.team_id === localteam_id) {
          const localteam_scorebord = data.data.scoreboards.filter((data) => {
            if (data.team_id == localteam_id) {
              return data;
            }
          });

          bestmen.scorebord = localteam_scorebord;
          return bestmen;
        }
      });

      sethometeam(localteam_bestmen);
      const visitorteam_bestmen = data.data.batting.filter((data) => {
        return data.team_id == visitorteam_id;
      });
      setvisiterteam(visitorteam_bestmen);
    }
  }

  useEffect(() => {
    !apidata && fetchapidata();
  }, [apidata]);
  return (
    <>
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
                  {apidata && apidata.localteam?.id === apidata?.runs[0].team_id
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
          <div className="flex justify-center items-center text-red-700 pb-[15px]">
            {apidata && apidata?.note}
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
          <ScoreCard
            {...{
              apidata: hometeam,
              alldata: apidata,
              hometeam: apidata?.localteam_id,
            }}
          />
          <ScoreCard
            {...{
              apidata: visiterteam,
              alldata: apidata,
              hometeam: apidata?.visitorteam_id,
            }}
          />
        </div>
      </div>
    </>
  );
}
