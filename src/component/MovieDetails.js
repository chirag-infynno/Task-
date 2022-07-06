/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import user1 from "../../src/img/users1.png";
import list from "../../src/img/list(1).png";
import download from "../../src/img/download.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ReactPlayer from "react-player/youtube";
import settings from "../../src/img/settings.png";
import { FaPlay, FaPlus } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import imbd from "../../src/img/imdb.png";
import { AiOutlineDownload } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";

export function MovieDetails() {
  const [similar, setSimilar] = useState([]);
  const [movie, setmovie] = useState([]);
  const [image, setimage] = useState([]);
  const [videos, setvideo] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const { id } = useParams();

  const similermovie = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    if (status == 200) {
      setSimilar(data.results);
    }
  };
  // };

  const castapi = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    // if (status == 200) {
    setCastdata(data.cast);
    // console.log("cast", data.cast);
    // }
  };

  const fetchapi = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    if (status == 200) {
      setmovie(data);
    }
  };
  const fetchimage = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    if (status == 200) {
      setimage(data);
      castapi();
    }
  };

  const fetchvideos = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    if (status == 200) {
      setvideo(data.results[0]);
      castapi();
    }
  };

  useEffect(() => {
    // id = 12;
    fetchimage();
    fetchapi();
    fetchvideos();
    similermovie();
  }, [id]);

  return (
    <>
      {image?.logos && (
        <div
          style={{
            // width: "1340px",
            position: "absolute",
            // position: absolute;
            width: "100%",
            overflow: "hidden",
            height: "100vh",
            maxWidth: "1440px",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${image.backdrops[1].file_path}`}
            className="posterImg"
            alt="avtar"
          />
        </div>
      )}
      <div className="leftside-bar">
        <img src={user1} alt="icons" className="leftside-icon" />
        <img src={list} alt="icons" className="leftside-icon" />
        <img src={download} alt="icons" className="leftside-icon" />
        <img src={settings} alt="icons" className="leftside-icon" />
      </div>
      <div className="image-details">
        {image?.logos && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/original/${image.logos[0]?.file_path}`}
              style={{
                width: "424px",
              }}
              alt="avtar"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <p className="overview">{movie.overview}</p>

              <div className="movie-type">
                <span
                  style={{
                    color: "#FF2E00",
                  }}
                >
                  GENRES{" "}
                </span>
                <span
                  style={{
                    color: "white",
                  }}
                >
                  {" "}
                  {movie.genres
                    ?.map((data) => {
                      return data.name;
                    })
                    .join(" , ")}
                  {/* } */}
                </span>
              </div>
            </div>

            <div className="buttons-list">
              <button className="play-btn">
                <span className="play-btn-text">WATCH</span>
                <FaPlay
                  style={{
                    color: "white",
                    marginLeft: "20px",
                  }}
                ></FaPlay>
              </button>

              <button className="mylist-btn">
                <span className="play-btn-text">MY LIST</span>
                <FaPlus
                  style={{
                    color: "white",
                    marginLeft: "20px",
                  }}
                ></FaPlus>
              </button>
              <div className="download-btn">
                <AiOutlineDownload
                  style={{
                    height: "24px",
                    width: "24px",
                  }}
                />
              </div>
            </div>

            <div className="ratings">
              <img src={imbd} alt="imdb_image"></img>
              <span className="avg-rating">{movie?.vote_average} </span>
              <p className="rting-u">U/A</p>
              <p className="rting-4k">4k</p>
              <p className="year">
                {movie?.vote_average &&
                  new Date(movie.release_date).getFullYear()}{" "}
              </p>
              {/* </div> */}
            </div>

            <div className="movie-type">
              <span
                style={{
                  color: "#FF2E00",
                }}
              >
                AUDIO{" "}
              </span>
              <span
                style={{
                  color: "white",
                }}
              >
                {movie.spoken_languages
                  ?.map((data) => {
                    return data.name;
                  })
                  .join(" , ")}
              </span>
            </div>

            <div className="movie-type">
              <span
                style={{
                  color: "#FF2E00",
                }}
              >
                SUBTITLES{" "}
              </span>
              <span
                style={{
                  color: "white",
                }}
              >
                English
              </span>
            </div>
          </>
        )}
      </div>

      <section className="movie-sub">
        <div className="movie-discription">
          <div className="trailer-div">
            <span> TRAILER</span>
            <div
              className="trailer"
              style={{ width: "307px", height: "170px" }}
            >
              <ReactPlayer
                controls
                light
                playing
                width={"307px"}
                height={"195px"}
                url={`https://www.youtube.com/watch?v=${videos.key}`}
              />
            </div>
          </div>
          <div className="cast-div">
            <span>CAST AND CREW INFO</span>

            <Swiper
              slidesPerView={5}
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
              {" "}
              {castdata?.map((data) => {
                return (
                  <SwiperSlide>
                    <div className="cast-data">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${data.profile_path}`}
                        style={{
                          width: "110px",
                          height: "145px",
                        }}
                        alt="image not found"
                      />
                      <span className="cast-name">{data.name}</span>
                      <span className="character">{data.character}</span>
                    </div>
                    ;
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <section
        className="other-movie"
        style={
          {
            // margin: "75px 0px 0px 122px",
            // border: "1px solid red",
          }
        }
      >
        <span className="similer-text">MORE LIKE THIS</span>
        <div className="movielist">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
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
            {similar?.map((data) => {
              return (
                <SwiperSlide>
                  <Link to={`/${data.id}`}>
                    <div className="movie-border">
                      <img
                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        style={{
                          width: "289px",
                          height: "172px",
                          borderRadius: "7px",
                        }}
                        alt=""
                      />
                    </div>
                  </Link>
                  {/* ; */}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
