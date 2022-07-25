import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export const ScoreCard = ({
  apidata,
  alldata,
  hometeam,
  visitorteam,
  scoreboards,
  didnotplaylocal,
}) => {
  const [allteam, setAllteam] = useState([]);

  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {});

  return (
    <>
      <section className=" flex justify-center items-center bg-white">
        <div className="flex flex-col w-[669px]">
          <div className="topTitle border-b-[1px] w-[669px] border-b-[#e6e6e6] px-[18px] py-[15px] flex justify-between items-center gap-auto  bg-[#fafafa] h-[50px]">
            <div className="code">
              <p className="text-[16px] text-[#141414] font-[600] leading-5">
                {hometeam && alldata?.localteam?.id === hometeam
                  ? alldata?.localteam?.code
                  : alldata?.visitorteam?.code}
              </p>
            </div>
            <div className="scrollBar flex gap-[40px] justify-center items-center bg-[#FAFAFA]">
              <div className="runs">
                <p className="text-[14px] text-[#141414] font-[600] leading-5">
                  {hometeam &&
                    (hometeam === alldata?.runs[0]?.team_id
                      ? `${alldata?.runs[0].score} / ${alldata?.runs[0].wickets}`
                      : `${alldata?.runs[1].score} / ${alldata?.runs[1].wickets}`)}
                </p>
              </div>
              <div
                className="scrollDown w-[16px] h-[16px] bg-[#ffb999] rounded-full "
                onClick={() => setDropDown(!dropDown)}
              >
                <button
                  className=" text-white flex justify-center items-center"
                  onClick={() => setDropDown(!dropDown)}
                >
                  <AiOutlineDown
                    className={`  transition-all duration-700 ${
                      dropDown ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`${
              dropDown ? "max-h-[1560px]   " : "max-h-[0] "
            } transition-all ease-in-out duration-700 overflow-hidden`}
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
                        <div className="flex items-center gap-[10px]">
                          <span className="text-[rgb(0,129,255)] text-[14px] cursor-pointer">
                            {data.batsman.fullname}
                          </span>
                          {alldata &&
                            alldata?.lineup.map((captain, index) => {
                              return (
                                captain.id == data.player_id &&
                                captain.lineup.captain && (
                                  <>
                                    <span
                                      key={index}
                                      className="text-[rgb(0,129,255)] text-[14px] cursor-pointer"
                                    >
                                      (c)
                                    </span>{" "}
                                  </>
                                )
                              );
                            })}
                          {alldata &&
                            alldata?.lineup.map((captain, index) => {
                              return (
                                captain.id == data.player_id &&
                                captain.lineup.wicketkeeper && (
                                  <>
                                    <span
                                      key={index}
                                      className="text-[rgb(0,129,255)] text-[14px] cursor-pointer"
                                    >
                                      (wk)
                                    </span>{" "}
                                  </>
                                )
                              );
                            })}
                        </div>
                        <div className="flex  ">
                          <span className=" min-w-[60px]">{data.score}</span>
                          <span className=" w-[60px]">{data.ball}</span>
                          <span className=" w-[60px]">{data.four_x}</span>
                          <span className=" w-[60px]">{data.six_x}</span>
                          <span className=" w-[60px]">
                            {data.rate.toFixed(1)}
                          </span>
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

              {didnotplaylocal?.length > 1 && (
                <div className="px-[10px] my-[10px] flex flex-col">
                  <div className="flex justify-between  w-[100%] items-center">
                    <div>
                      <span className="text-[rgb(20, 20, 20)] text-[18px] whitespace-nowrap">
                        Yet To Bat
                      </span>
                    </div>
                    <div className="flex items-center ">
                      <span className=" text-[12px] text-[gb(120, 120, 120)]">
                        {didnotplaylocal}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {alldata &&
                alldata?.scoreboards.map((data, index) => {
                  return data.team_id == hometeam && data.type == "extra" ? (
                    <div
                      className="px-[10px] my-[10px] flex flex-col"
                      key={index}
                    >
                      <div className="flex justify-between  w-[100%] items-center">
                        <div>
                          <span className="text-[rgb(20, 20, 20)] text-[18px]">
                            EXTRA
                          </span>
                        </div>
                        <div className="flex items-center ">
                          <span className="  text-[18px]">
                            {data.wide +
                              data.bye +
                              data.leg_bye +
                              data.noball_runs +
                              data.penalty}
                          </span>
                          <span className=" text-[12px] text-[gb(120, 120, 120)]">{`(lb ${data.leg_bye},nb ${data.noball_runs},w ${data.wide},p ${data.penalty})`}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    data.team_id == hometeam && data.type == "total" && (
                      <div
                        className="px-[10px] my-[10px] flex flex-col"
                        key={index}
                      >
                        <div className="flex justify-between  w-[100%] items-center">
                          <div>
                            <span className="text-[rgb(20, 20, 20)] text-[18px]">
                              Total Score
                            </span>
                          </div>
                          <div className="flex  ">
                            <span className=" ">
                              {data.total}/{data.wickets}{" "}
                              <span>({data.overs} overs)</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>

            <div className=" mx-[10px]  my-[10px]  ">
              <div className="bg-[#FAFAFA] flex justify-between py-[10px] px-[10px]">
                <div>
                  <span>BOWLER</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[60px]">O</span>{" "}
                  <span className="w-[60px]">M</span>{" "}
                  <span className="w-[60px]">R</span>{" "}
                  <span className="w-[60px]">W</span>{" "}
                  <span className="w-[60px]">ECO</span>
                </div>
              </div>

              {alldata &&
                alldata?.bowling.map((data, index) => {
                  return (
                    data.team_id === hometeam && (
                      <div
                        className="px-[10px] my-[10px] flex flex-col"
                        key={index}
                      >
                        <div className="flex justify-between  w-[100%] items-center">
                          <div>
                            <span className="text-[rgb(0,129,255)] text-[14px] cursor-pointer">
                              {data.bowler.fullname}
                            </span>
                          </div>
                          <div className="flex  ">
                            <span className=" min-w-[60px]">
                              {data.overs.toFixed(1)}
                            </span>
                            <span className=" w-[60px]">{data.medians}</span>
                            <span className=" w-[60px]">{data.runs}</span>
                            <span className=" w-[60px]">{data.wickets}</span>
                            <span className=" w-[60px]">
                              {data.rate.toFixed(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>

            <div className=" mx-[10px]  my-[10px]  ">
              <div className="bg-[#FAFAFA] flex justify-between py-[10px] px-[10px]">
                <div>
                  <span>FALL OF WICKETS</span>
                </div>
                <div className="flex items-center">
                  <span className="w-[60px]">SCORE</span>{" "}
                  <span className="w-[60px]">OVER</span>{" "}
                </div>
              </div>

              {alldata &&
                alldata?.batting.map((data, index) => {
                  return (
                    data.team_id === hometeam &&
                    data.fow_balls > 0 && (
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
                            <span className=" min-w-[60px]">
                              {data.fow_score}
                            </span>
                            <span className=" w-[60px]">{data.fow_balls}</span>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
