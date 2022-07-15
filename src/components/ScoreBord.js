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
export function ScoreBord() {
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
      <div className="relative h-[167px] bg-back-color max-w-[1366px] mx-auto   ">
        <h1> hi</h1>
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
