import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { SliderComponent } from "./components/SliderSliderComponent";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ScoreBord } from "./components/ScoreBord";

import { CounterData } from "./components/counter";
import { Apicalll } from "./components/Apicalll";
import { Reduxdata } from "./components/Reduxdata";

export default function App() {
  // redux start
  return (
    <>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
      {/* <CounterData /> */}
      <Reduxdata />
    </>
  );
}
