import { FaSearch, FaGift, FaBell, FaUserCircle } from "react-icons/fa";

import profile from "../../src/img/Ellipse 1.png";
export function Nav() {
  return (
    <>
      <div className="nav">
        <span className="dramatic_lable">DRAMATIC</span>

        <div className="links">
          <span className="a-link" id="active" style={{}}>
            Home
          </span>
          <span
            className="a-link"
            style={{
              marginLeft: "14px",
              whiteSpace: "nowrap",
            }}
          >
            TV SHOW
          </span>
          <span className="a-link">MOVIES</span>
          <span className="a-link">NEW</span>
        </div>

        <div className="all-input">
          <div className="input-icons">
            <input className="input" type="text" placeholder="SEARCH" />
            <FaSearch
              // clas
              style={{
                color: "white",
                marginRight: "17px",
              }}
            />
          </div>
          {/* <img
            src={
              "https://www.figma.com/file/ycDJI5ZoZVWavnBqme9ssW/Dramatic---Indian-Movie-Streaming-Platform-(Community)?node-id=4%3A39"
            }
          ></img> */}
          <FaGift
            style={{
              width: "31px",
              height: "31px",
              color: "white",
            }}
          />
          <FaBell
            style={{
              width: "31px",
              height: "31px",
              color: "white",
            }}
          />
          {/* <FaUserCircle
            style={{
              width: "31px",
              height: "31px",
              color: "white",
            }}
          /> */}

          <img
            src={profile}
            style={{
              Width: "59px",
              Height: "59px",
              color: "white",
            }}
          />
        </div>
      </div>

      <div className="left"></div>
    </>
  );
}
