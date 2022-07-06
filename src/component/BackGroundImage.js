import axios from "axios";
import { useEffect, useState } from "react";
import user1 from "../../src/img/users1.png";
import list from "../../src/img/list(1).png";
import download from "../../src/img/download.png";
import settings from "../../src/img/settings.png";

export function BackGroundImage() {
  const [movie, setmovie] = useState([]);
  const [image, setimage] = useState([]);
  const [background, setBackground] = useState(false);
  useEffect(() => {
    const fetchapi = async () => {
      const { data, status } = await axios.get(
        "https://api.themoviedb.org/3/movie/27578?api_key=ac302597611eaf3f79a8fee2cb0cf0bd"
      );
      if (status == 200) {
        // console.log("first", data);
        setmovie(data);
        console.log(data);
      }
    };
    const fetchimage = async () => {
      const { data, status } = await axios.get(
        "https://api.themoviedb.org/3/movie/27578/images?api_key=ac302597611eaf3f79a8fee2cb0cf0bd"
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
          src={`https://image.tmdb.org/t/p/original/${image.backdrops[0].file_path}`}
          className="posterImg"
          alt="avtar"
        />
      )}
      <div className="leftside-bar">
        <img
          src={user1}
          alt="icons"
          style={{
            height: "30px",
            width: "30px",
            alt: "icons",
            //   marginLeft: "56px",
            //   marginTop: "35px",
          }}
        />
        <img
          src={list}
          alt="icons"
          style={{
            height: "30px",
            width: "30px",

            //   marginLeft: "56px",
            //   marginTop: "35px",
          }}
        />
        <img
          src={download}
          alt="icons"
          style={{
            height: "30px",
            width: "30px",
            //   marginLeft: "56px",
            //   marginTop: "35px",
          }}
        />
        <img
          src={settings}
          alt="icons"
          style={{
            height: "30px",
            width: "30px",
            //   marginLeft: "56px",
            //   marginTop: "35px",
          }}
        />
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
                height: "150px",
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
          </>
        )}
        {/* width: 424px; height: 180px; */}
      </div>
    </>
  );
}
