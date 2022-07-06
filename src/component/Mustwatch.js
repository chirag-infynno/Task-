import { Card } from "./Card";

import { FaAngleDown, FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
export function MustWatch(props) {
  const [buttonColor, setButtonColor] = useState({
    hindi: "active",
  });
  const [movie, setmovie] = useState([]);

  function changebuttoncolor(e) {
    setButtonColor({
      ...buttonColor,
      [e.target.name]: buttonColor[e.target.name] == "active" ? "" : "active",
    });
  }

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
                FILTERS <FaAngleDown />
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
              paddingLeft: "23px",
              paddingTop: "21px",
            }}
          >
            <button
              className={`btn-all${
                !buttonColor.hindi ? "" : "-" + buttonColor.hindi
              }`}
              name="hindi"
              onClick={changebuttoncolor}
            >
              {" "}
              Hindi
            </button>
            <button
              className={`btn-all${
                !buttonColor.Bengali ? "" : "-" + buttonColor.Bengali
              }`}
              onClick={changebuttoncolor}
              name="Bengali"
            >
              {" "}
              Bengali
            </button>
            <button
              className={`btn-all${
                !buttonColor.Marathi ? "" : "-" + buttonColor.Marathi
              }`}
              onClick={changebuttoncolor}
              name="Marathi"
            >
              Marathi
            </button>
            <button
              className={`btn-all${
                !buttonColor.Assamese ? "" : "-" + buttonColor.Assamese
              }`}
              onClick={changebuttoncolor}
              name="Assamese"
            >
              Assamese
            </button>
            <button
              className={`btn-all${
                !buttonColor.Telugu ? "" : "-" + buttonColor.Telugu
              }`}
              onClick={changebuttoncolor}
              name="Telugu"
            >
              {" "}
              Telugu
            </button>
            <button
              className={`btn-all${
                !buttonColor.Tamil ? "" : "-" + buttonColor.Tamil
              }`}
              onClick={changebuttoncolor}
              name="Tamil"
            >
              {" "}
              Tamil
            </button>
            <button
              className={`btn-all${
                !buttonColor.Malayalam ? "" : "-" + buttonColor.Malayalam
              }`}
              onClick={changebuttoncolor}
              name="Malayalam"
            >
              {" "}
              Malayalam
            </button>
          </div>
        )}

        <div className="slider-content ">
          {movie && <Card {...{ movie }} />}
        </div>

        <section className="similler-movie"></section>
      </section>
    </>
  );
}
