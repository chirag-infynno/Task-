import imbd from "../../src/img/imdb.png";

import { FaImdb, FaEye, FaHeart } from "react-icons/fa";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export function Card({ movie }) {
  return (
    <>
      {/* <Slider {...settings}> */}
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: true,
          enabled: false,
          // hiddenClass: true,
        }}
        navigation={false}
        onPaginationHide={true}
        modules={[Pagination]}
        className="mySwiper"
        showsPagination={false}
      >
        {movie.map((data, index) => {
          return (
            <SwiperSlide>
              <div className="movieCard" key={index}>
                <div className="card">
                  {/* {console.log("nam", data)} */}
                  {/* <link */}
                  <Link to={`/${data.id}`}>
                    <div className="moviePoster">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                        alt=""
                        // className="i"
                      />
                    </div>
                  </Link>
                  <div className="moiveTtile">
                    <p className="moiveTtile-p">{data.original_title}</p>
                  </div>
                  <div className="realeasDate">
                    <p>{new Date(data.release_date).getFullYear()}</p>
                  </div>
                  <div className="movieRating">
                    <div className="IMDB">
                      <div className="IMDBLogo">
                        <img
                          src={imbd}
                          style={{ width: "28px", height: "14px" }}
                          alt=""
                        />
                        {/* <FaImdb
                      style={{
                        height: "100px",
                        width: "100px",
                        color: "pink",
                      }}
                    /> */}
                      </div>
                      <div className="movieRate">
                        <p>{data.vote_average}</p>
                      </div>
                    </div>
                    <div className="moiveRight">
                      <div className="heart">
                        {/* <img src={} alt="" /> */}
                        <FaEye
                          style={{
                            width: "17px",
                            height: "16px",
                            color: "white",
                          }}
                        />
                      </div>
                      <div className="favMovie">
                        {/* <img src={} alt="" /> */}
                        <FaHeart
                          style={{
                            width: "17px",
                            height: "16px",
                            color: "white",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* </Slider> */}
    </>
  );
}
