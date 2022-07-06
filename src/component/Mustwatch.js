import { Card } from "./Card";

import { FaAngleDown, FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MustWatch(props) {
  console.log(props);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  // var settings = {
  //   // arrows: false,
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  const [movie, setmovie] = useState([]);

  const moiedata = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.api}?api_key=ac302597611eaf3f79a8fee2cb0cf0bd&language=en-US&page=1`
    );
    status == 200 && setmovie(data.results);
  };

  useEffect(() => {
    moiedata();
  }, []);
  return (
    <>
      <section className="moviesToWatch">
        {/* {props.MustWatch || props.RECOMMENDED || props.BOLLYWOOD} )&& */}
        <div className="must-watch-start">
          <div className="movieHeading">
            <span className="must-watch-span">
              {props.MustWatch && "MOVIES YOU MUST WATCH"}{" "}
              {props.RECOMMENDED && "RECOMMENDED FOR YOU"}{" "}
              {props.BOLLYWOOD && "BOLLYWOOD CLASSICS"}
            </span>
          </div>
          {props.MustWatch && (
            <div className="filterbtn">
              <button>
                Filter <FaAngleDown />
              </button>
            </div>
          )}
        </div>
        {props.RECOMMENDED && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "21px",
              marginLeft: "23px",
            }}
          >
            <button className="btn-all"> Hindi</button>
            <button className="btn-all"> Bengali</button>
            <button className="btn-all"> Marathi</button>
            <button className="btn-all"> Assamese</button>
            <button className="btn-all"> Telugu</button>
            <button className="btn-all"> Tamil</button>
            <button className="btn-all"> Malayalam</button>
            {/* <button className="btn-all"> home</button> */}
          </div>
        )}

        <div className="slideBar "> {movie && <Card {...{ movie }} />}</div>
        {/* )} */}
      </section>
    </>
  );
}
