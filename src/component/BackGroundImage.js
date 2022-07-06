import axios from "axios";
import { useEffect, useState } from "react";
import user1 from "../../src/img/users1.png";
import list from "../../src/img/list(1).png";
import download from "../../src/img/download.png";
import settings from "../../src/img/settings.png";
import { FaPlay, FaPlus } from "react-icons/fa";
import imbd from "../../src/img/imdb.png";

export function BackGroundImage() {
  const [movie, setmovie] = useState([]);
  const [image, setimage] = useState([]);
  const [background, setBackground] = useState(false);
  useEffect(() => {
    const fetchapi = async () => {
      const { data, status } = await axios.get(
        "https://api.themoviedb.org/3/movie/634649-spider-man-no-way-home?api_key=ac302597611eaf3f79a8fee2cb0cf0bd"
      );
      if (status == 200) {
        // console.log("first", data);
        setmovie(data);
        console.log(data);
      }
    };
    const fetchimage = async () => {
      const { data, status } = await axios.get(
        "https://api.themoviedb.org/3/movie/634649-spider-man-no-way-home/images?api_key=ac302597611eaf3f79a8fee2cb0cf0bd"
      );
      if (status == 200) {
        console.log("image", data);

        setimage(data);
        setBackground(true);
      }
      console.log(data);
    };

    fetchapi();
    fetchimage();
  }, []);
  // if (image.length === 0) {
  //   return <p>loding</p>;
  // }
  return (
    <>
      {/* <div className="img"> */}
      {/* <img
        src={`https://image.tmdb.org/t/p/original/${image.backdrops[0].file_path}`}
        className="posterImg"
        alt="background_image"
      /> */}

      {image?.logos && (
        <img
          src={`https://image.tmdb.org/t/p/original/${image.backdrops[1].file_path}`}
          className="posterImg"
          alt="avtar"
        />
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
              src={`https://image.tmdb.org/t/p/original/${image.logos[0].file_path}`}
              // className="posterImg"
              style={{
                width: "424px",
                height: "180px",
              }}
              alt="avtar"
            />

            <p
              style={{
                // height: "150px",
                width: "560px",
                color: "white",
              }}
            >
              {movie.overview}{" "}
            </p>

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
              >{`${movie.genres[0].name} ${movie.genres[1].name}`}</span>
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
            </div>

            <div className="ratings">
              {/* imbd */}
              <img src={imbd} alt="imdb_image"></img>
              <span className="avg-rating">{movie?.vote_average} </span>
              {/* <div className="rting-4k"> */}
              <p className="rting-u">U/A</p>
              <p className="rting-4k">4k</p>
              <p className="year">
                {" "}
                {movie?.vote_average &&
                  new Date(movie.release_date).getFullYear()}{" "}
              </p>
              {/* </div> */}
            </div>
          </>
        )}
        {/* width: 424px; height: 180px; */}
      </div>
    </>
  );
}
