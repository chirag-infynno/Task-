import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export const ScoreCard = ({ apidata, alldata, hometeam, visitorteam }) => {
  console.log("alldat", alldata);
  const [dropDown, setDropDown] = useState(false);

  function DropDown() {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  }
  useEffect(() => {});

  return (
    <>
      <div className="bg-[#FAFAFA] flex justify-between py-[10px] px-[10px]">
        <div>
          <span>BATSMAN</span>
        </div>
        <div className="flex items-center">
          {" "}
          <span className="w-[60px]">R</span>{" "}
          <span className="w-[60px]">B</span>{" "}
          <span className="w-[60px]">4s</span>{" "}
          <span className="w-[60px]">6s</span>{" "}
          <span className="w-[60px]">S/R</span>
        </div>
      </div>
      <section className=" flex justify-center items-center bg-white">
        <div className="flex flex-col w-[660px]">
          <div className="topTitle border-b-[1px] border-b-[#e6e6e6] px-[18px] py-[15px] flex justify-between items-center gap-auto w-[100%] bg-[#fafafa] h-[50px]">
            <div className="code">
              <p className="text-[16px] text-[#141414] font-[600] leading-5">
                {/* {score.localteam.code}hello */}
                {hometeam && alldata.localteam?.id === hometeam
                  ? alldata.localteam.code
                  : alldata.visitorteam.code}
                {/* {visitorteam && alldata.visitorteam?.code} */}
              </p>
            </div>
            <div className="scrollBar flex gap-[40px] justify-center items-center bg-[#FAFAFA]">
              <div className="runs">
                <p className="text-[14px] text-[#141414] font-[600] leading-5">
                  {/* {hometeam && alldata.runs[0].team_id === hometeam} */}
                  {hometeam && hometeam === alldata?.runs[0].team_id
                    ? `${alldata?.runs[0].score} / ${alldata?.runs[0].wickets}`
                    : `${alldata?.runs[1].score} / ${alldata?.runs[1].wickets}`}
                  {/* {hometeam &&  } */}
                  {/* 123/74 */}
                </p>
              </div>
              <div className="scrollDown w-[16px] h-[16px] bg-[#ffb999] rounded-full">
                <button
                  className=" text-white flex justify-center items-center"
                  onClick={() => DropDown()}
                >
                  <AiOutlineDown />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${
              dropDown
                ? "h-[100%] "
                : "h-[0]  transition ease-in-out delay-[1000ms] overflow-hidden"
            }`}
          >
            <div className=" mx-[10px]  my-[10px]  ">
              <div className="bg-[#FAFAFA] flex justify-between py-[10px] px-[10px]">
                <div>
                  <span>BATSMAN</span>
                </div>
                <div className="flex items-center">
                  {" "}
                  <span className="w-[60px]">R</span>{" "}
                  <span className="w-[60px]">B</span>{" "}
                  <span className="w-[60px]">4s</span>{" "}
                  <span className="w-[60px]">6s</span>{" "}
                  <span className="w-[60px]">S/R</span>
                </div>
              </div>

              {apidata &&
                apidata.map((data, index) => {
                  return (
                    <div
                      className="px-[10px] my-[10px] flex flex-col"
                      key={index}
                    >
                      <div className="flex justify-between  w-[100%] items-center">
                        <div>
                          <span className="text-[rgb(0,129,255)] text-[14px]">
                            {data.batsman.fullname}
                          </span>
                        </div>
                        <div className="flex  ">
                          <span className=" min-w-[60px]">{data.score}</span>
                          <span className=" w-[60px]">{data.ball}</span>
                          <span className=" w-[60px]">{data.four_x}</span>
                          <span className=" w-[60px]">{data.six_x}</span>
                          <span className=" w-[60px]">{data.rate}</span>
                        </div>
                      </div>
                      <div className="flex   w-[100%] items-start text-[11px] text-[#787878]">
                        {data.catchstump?.fullname &&
                          `c ${data.catchstump?.fullname}`}{" "}
                        {data.bowler?.fullname
                          ? `b ${data.bowler?.fullname}`
                          : "notout"}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
