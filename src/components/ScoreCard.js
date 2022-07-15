import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export const ScoreCard = () => {
  const [dropDown, setDropDown] = useState(false);

  function DropDown() {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  }

  return (
    <>
      <section className="flex justify-center items-center bg-white">
        <div className="flex flex-col w-[660px]">
          <div className="topTitle border-b-[1px] border-b-[#e6e6e6] px-[18px] py-[15px] flex justify-between items-center gap-auto w-[100%] bg-[#fafafa] h-[50px]">
            <div className="code">
              <p className="text-[16px] text-[#141414] font-[600] leading-5">
                {/* {score.localteam.code} */}hello
              </p>
            </div>
            <div className="scrollBar flex gap-[40px] justify-center items-center">
              <div className="runs">
                <p className="text-[14px] text-[#141414] font-[600] leading-5">
                  123/74
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
                ? "h-[100%] transition ease-in-out delay-[1000ms]"
                : "h-[0] transition ease-in-out delay-[1000ms] overflow-hidden"
            }`}
          >
            <div className="border-[1px] border-red-800 mx-[10px]"> a</div>
          </div>
        </div>
      </section>
    </>
  );
};
