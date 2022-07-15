import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { SliderComponent } from "./components/SliderSliderComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ScoreBord } from "./components/ScoreBord";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Router> */}
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SliderComponent />{" "}
              </>
            }
            excet
          ></Route>

          <Route path="/:id" element={<ScoreBord />} excet></Route>
        </Routes>
        <Footer />
        {/* </Router> */}
      </BrowserRouter>
    </>
  );
}
