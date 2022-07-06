// import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./component/nav";
import { BackGroundImage } from "./component/BackGroundImage";
import { MustWatch } from "./component/Mustwatch";
import { Footer } from "./component/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ButtonCenter } from "./component/ButtonCenter";
import { MovieDetails } from "./component/MovieDetails";
import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  return (
    <>
      <BrowserRouter>
        {" "}
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BackGroundImage />
                <MustWatch {...{ MustWatch: true, api: "upcoming" }} />
                <MustWatch {...{ RECOMMENDED: true, api: "634649/similar" }} />
                <MustWatch {...{ BOLLYWOOD: true, api: "top_rated" }} />
                <ButtonCenter />{" "}
              </>
            }
            excet
          />

          <Route
            path="/:id"
            element={
              <>
                <MovieDetails />
                {/* <BackGroundImage />
                  <MustWatch {...{ MustWatch: true, api: "upcoming" }} />
                  <MustWatch
                    {...{ RECOMMENDED: true, api: "634649/similar" }}
                  />
                  <MustWatch {...{ BOLLYWOOD: true, api: "top_rated" }} />
                  <ButtonCenter />{" "} */}
              </>
            }
            excet
          />
          {/* <Route path="*" element={navigate("/")} /> */}
        </Routes>
        <Footer />
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
