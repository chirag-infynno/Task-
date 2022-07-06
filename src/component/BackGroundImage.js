import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import user1 from "../../src/img/users1.png";
import list from "../../src/img/list(1).png";
import download from "../../src/img/download.png";
import settings from "../../src/img/settings.png";
import { FaPlay, FaPlus } from "react-icons/fa";
import imbd from "../../src/img/imdb.png";

export function BackGroundImage() {
  const { id } = useParams();
  console.log("id", id);

  if (id) {
    console.log("yes");
  }
  const [movie, setmovie] = useState([]);
  const [image, setimage] = useState([]);

  const [background, setBackground] = useState(false);
  const fetchapi = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/634649-spider-man-no-way-home?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    if (status == 200) {
      console.log("new", data);
      fetchimage();

      setmovie(data);
    }
  };
  const fetchimage = async () => {
    const { data, status } = await axios.get(
      `https://api.themoviedb.org/3/movie/634649-spider-man-no-way-home/images?api_key=ac302597611eaf3f79a8fee2cb0cf0bd`
    );
    if (status == 200) {
      setimage(data);
      setBackground(true);
    }
  };

  useEffect(() => {
    fetchapi();
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
          {" "}
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
              src={`https://image.tmdb.org/t/p/original/${image?.logos[0].file_path}`}
              style={{
                width: "424px",
                height: "180px",
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
              <p
                style={{
                  width: "560px",
                  color: "white",
                  // height: "128px",
                }}
                className="overview"
              >
                {movie.overview}
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
                >{`${movie.genres[0]?.name} ${movie.genres[1]?.name}`}</span>
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
          </>
        )}
        {/* width: 424px; height: 180px; */}
      </div>
    </>
  );
}
